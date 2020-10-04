import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}
  canActivate(): boolean {
    var token = sessionStorage.getItem("jwt");
    console.log(token);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate([""]);
    return false;
  }
}
