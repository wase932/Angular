import { AuthorsvcService } from './authorsvc.service';
import { Component } from '@angular/core';


@Component
({
    selector: "Author",
    template: `
                <h1>{{title}}</h1>
                <h2>{{count}}</h2>
                <ul>
                    <li *ngFor="let author of authorList">
                        {{author}}
                    </li>
                </ul>
              `
})
export class Authors{
    title = "Angular";
    authorList;
    count;

    constructor(service:AuthorsvcService)
    {
        this.authorList = service.getAuthors();
        this.count = service.getAuthors().length + " Authors";
    }

}