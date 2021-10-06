import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'fullName', 'post', 'salary'];
  dataSource: MatTableDataSource<any> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<EmployeeItem>(EMPLOYEE_DATA);
    this.dataSource.paginator = this.paginator;
  }
}

export interface EmployeeItem {
  id: number;
  fullName: string;
  post: string;
  salary: number;
}

const EMPLOYEE_DATA: EmployeeItem[] = [
  {id: 1, fullName: 'Kot Oleksii', post: 'programmer', salary: 1200},
  {id: 2, fullName: 'Rostyslav Kusch', post: 'programmer', salary: 1000},
  {id: 3, fullName: 'Victor Monakhov', post: 'programmer', salary: 1200},
  {id: 4, fullName: 'Valerii Monakhov', post: 'programmer', salary: 1200},
  {id: 5, fullName: 'Employee Test', post: 'test', salary: 500},
  {id: 6, fullName: 'Bruce Willis', post: 'hard nut', salary: 800},
  {id: 7, fullName: 'Employee Test', post: 'programmer', salary: 800},
  {id: 8, fullName: 'Employee Test', post: 'programmer', salary: 800},
  {id: 9, fullName: 'Employee Test', post: 'programmer', salary: 8000},
  {id: 10, fullName: 'Employee Test', post: 'programmer', salary: 800},
];
