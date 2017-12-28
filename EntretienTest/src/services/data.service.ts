import {Injectable} from "@angular/core";
import {Http} from "@angular/http" ;
import 'rxjs/add/operator/map';
//import {Contact} from '../model/model.contact';

@Injectable()
export class DataService {

    constructor(private http:Http){}
    getData(){
           return this.http.get("http://internal.ats-digital.com:3066/api/products")
            .map(resp=>resp.json()) ;
    }


}