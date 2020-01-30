import { Component, OnInit, } from '@angular/core';

export interface post {
  title: string,
  thought: string,
}

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css']
})
export class SocialPostComponent implements OnInit {
  
  showModal : boolean = false;

  thoughtList: post[] = [];
  constructor() { }

  
  addThought($event) {
    this.thoughtList = [...this.thoughtList, $event]
    console.log($event)
  }

  toggleModal(){
    this.showModal=!this.showModal;
  }

  ngOnInit() {
  }
}
