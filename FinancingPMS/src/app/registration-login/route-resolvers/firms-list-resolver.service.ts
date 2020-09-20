import { Injectable } from "@angular/core";
import {} from "../../Enums/OperationType";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { FirmService } from "src/app/Services/FirmService";
import { Firm, FirmListResolver } from "src/app/Models/firm";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FirmResolver implements Resolve<FirmListResolver> {
  constructor(private _firmService: FirmService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FirmListResolver> {
    let output: FirmListResolver;
    // console.log("Inside Firm resolver");
    // this._firmService.getAllFirms().subscribe(
    //   (data) => {
    //     // console.log({ FirmsList: data, resolverErrorMessage: "" });
    //     output = { FirmsList: data, resolverErrorMessage: "" };
    //   },
    //   (error) => {
    //     console.log(error);
    //     output = { FirmsList: [], resolverErrorMessage: error };
    //   }
    // );
    // return of(output);
    return this._firmService.getAllFirms().pipe(
      map((list) => ({
        FirmsList: list,
      })),
      catchError((error) => {
        return of({ FirmsList: null, resolverErrorMessage: error });
      })
    );
  }
}
