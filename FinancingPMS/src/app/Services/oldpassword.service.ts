import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConfigUtility } from "../utilities/config-utility";
import { param } from "jquery";

@Injectable({
  providedIn: "root",
})
export class OldPasswordService {
  private urlForOldPassword = "http://localhost:49366/api/UpdatePassword/getOldPassword";

  constructor(private http: HttpClient) {}

  getOldPassword(firmId : string  , password : string) : Observable<any>{
    // var response;
     return this.http.get(this.urlForOldPassword ,
        {
            params:{
                firmId:firmId,
                password:password
                }
        });
  //   ).subscribe(data=>{
  //     console.log(data);
  //     response =  data;
  //   });
  //  return response;
  }
}
