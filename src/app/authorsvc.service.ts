import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsvcService {

  constructor() {

   }
     getAuthors(){
       let authorList = ["Author1","Author2","Author3"];
       return authorList;
    }

}
