import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { post } from "../social-post/social-post.component"

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']

})

export class PostFormComponent implements OnInit {
  @Input() title: string;

  @Input() thought: string;

  @Input() showModal: boolean;

  @Output() newThought = new EventEmitter<post>();

  idea: string;
  newTitle: string;
  submitted: boolean = false;

  addThought() {
    this.newThought.emit({ title: this.newTitle, thought: this.idea })
    
  }

  constructor() { }

  ngOnInit() {
  }

}
