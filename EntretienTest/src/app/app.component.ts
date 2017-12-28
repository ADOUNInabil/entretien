import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {DataService} from '../services/data.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Test';
  Data;
  type="All";
  constructor(private http:Http , private dataservice:DataService) {
    this.dataservice.getData().subscribe(data=>{
      this.Data=data;
      
    },err=>{
      console.log(err);
    });
    
   }

 console(){
  console.log(this.Data);
  console.log(this.type);
 }
}
