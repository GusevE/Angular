
import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  testForm:any = FormGroup;
   
  constructor() { 

  }

  ngOnInit(): void {

    this.testForm = new FormGroup({
      'userData': new FormGroup({
          'searchValue': new FormControl(null, Validators.required),
          'genre': new FormControl(null, Validators.required),
      }),
          
  });
}

  onSubmit() {
  console.log(this.testForm.value);
}



}
