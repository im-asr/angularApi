import { Component, OnInit } from '@angular/core';


import { AppService}  from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-api';
  private name: any;

  constructor(private appService :AppService ) {}

  ngOnInit() {
    let employee_salary :string= "132000";
    this.appService.getFoodFacts(employee_salary).subscribe((response: { [x: string]: { [x: string]: any; }; }) =>{
        let prod = response['employee']['generic_name_en'];
        console.log(prod);
        this.name = prod;

    });
  }
}
