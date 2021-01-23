import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, mapTo } from "rxjs/operators";
import { OldPasswordService } from "../Services/oldpassword.service";


export function oldPasswordValidator(_oldPasswordService : OldPasswordService,firmId : string): AsyncValidatorFn {
    return (control: AbstractControl)  => {
       return   _oldPasswordService.getOldPassword(firmId , control.value)
                                .pipe(
                                    map(
                                        response => {
                                           return response == true ? null : {'notmatched' : true};
                                        }
                                    )
                                )
      };
    }
