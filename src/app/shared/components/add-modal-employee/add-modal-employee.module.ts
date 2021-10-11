import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddModalEmployeeComponent} from "./add-modal-employee.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddModalEmployeeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AddModalEmployeeComponent]
})
export class AddModalEmployeeModule {
}
