import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class FilmsService {
    


 
   response:any;

    constructor(private http: HttpClient) { 
        
    }

  public getAll(){

  this.http.get('https://jsonplaceholder.typicode.com/posts/')
    .subscribe((response)=> {this.response = response;
      console.log(this.response)
    }
    )
}
}


