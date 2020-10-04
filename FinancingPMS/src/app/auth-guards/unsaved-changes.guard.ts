import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from "@angular/router";
import { Observable } from "rxjs";
import { FirmRegistrationComponent } from "../registration-login/firm-registration/firm-registration.component";

@Injectable({
  providedIn: "root",
})
export class UnsavedChangesGuard
  implements CanDeactivate<FirmRegistrationComponent> {
  canDeactivate(
    component: FirmRegistrationComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log(component.OriginalFirm);
    // console.log(component.Firm);
    if (component.OriginalFirm != component.Firm) {
      return confirm("Are you sure navigating away without saving changes?");
    }
    return true;
  }
}
