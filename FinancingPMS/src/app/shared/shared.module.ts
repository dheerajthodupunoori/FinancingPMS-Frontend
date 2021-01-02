import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmPassword} from "../validators/password-confirmpwd-validator";




@NgModule({
  declarations: [
    ConfirmPassword
  ],
  exports: [
    ConfirmPassword
],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
