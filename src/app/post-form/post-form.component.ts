import { Component, OnInit,} from '@angular/core';
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
   
  
  constructor() { }

  ngOnInit() {
  }

}
