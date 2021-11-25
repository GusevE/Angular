import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  name = "Title";
  value = ""
  
  constructor() { 

  }

  ngOnInit(): void {

  }
  generyChanch(name:any){

    if(name == "Genre")
   {
      this.name = "Genre"
   }
   else {
    this.name = "Title"
   }
   console.log(name)
  }

  inputHandler(event:any){  

    this.value = event.target.value
    console.log(this.value)
  }

}
