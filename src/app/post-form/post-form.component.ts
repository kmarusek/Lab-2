import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Template } from '@angular/compiler/src/render3/r3_ast';
export interface post{
  title : string,
  thought : string,
}
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
  
})

export class PostFormComponent implements OnInit {
  @Input() title: string
  @Input() thought: string
  thoughtsList: post[]= [{
    title: "New thought",
    thought: "here is my thought",
  }]
  addThought(newTitle = "", newThought = "" ) {
      
    if (newThought) {
        this.thoughtsList.push({title: newTitle, thought: newThought});
      }
    console.log("this worked", this.thoughtsList)
  }
 
  submitted = false;

  onSubmit() { this.submitted = true;
  console.log("this was submitted")
console.log(this.submitted) }
  constructor() { }

  ngOnInit() {
  }

}
