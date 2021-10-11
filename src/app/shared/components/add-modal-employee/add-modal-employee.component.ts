import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotifierService} from "angular-notifier";
import {DashboardService} from "../../../dashboard/dashboard.service";

@Component({
  selector: 'app-add-modal-employee',
  templateUrl: './add-modal-employee.component.html',
  styleUrls: ['./add-modal-employee.component.scss']
})

export class AddModalEmployeeComponent implements OnInit {
  public addEmployeeForm = this.fb.group({
    fio: ['', Validators.required],
    position: ['', Validators.required],
    salary: ['', Validators.required],
  });

  public employeeItemId: number = 0;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddModalEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notifierService: NotifierService,
              private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    if (this.data.method === 'edit') {
      this.employeeItemId = this.data.initialValue.id;
      this.addEmployeeForm.controls.fio.setValue(this.data.initialValue.fio);
      this.addEmployeeForm.controls.position.setValue(this.data.initialValue.position);
      this.addEmployeeForm.controls.salary.setValue(this.data.initialValue.salary);
    }
  }

  public employeeModalAction(method: string): void {
    if (method === 'add') {
      this.dashboardService.addEmployeeItem(this.addEmployeeForm.value).subscribe(res => {
          this.notifierService.notify('success', 'Add Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    } else {
      this.dashboardService.editEmployeeItem(this.employeeItemId, this.addEmployeeForm.value).subscribe(res => {
          this.notifierService.notify('success', 'Edit Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    }
  }

}
