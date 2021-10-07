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
  public dataSource: MatTableDataSource<any> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(EMPLOYEE_DATA);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(EMPLOYEE_DATA);
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
  {id: 1, fullName: 'Test1 Test1', post: 'programmer', salary: 1200},
  {id: 2, fullName: 'Test2 Test2', post: 'programmer', salary: 1000},
  {id: 3, fullName: 'Test4 Test3', post: 'programmer', salary: 1200},
  {id: 4, fullName: 'Test4 Test4', post: 'programmer', salary: 1200},
  {id: 5, fullName: 'Employee Test', post: 'test', salary: 500},
  {id: 6, fullName: 'Bruce Willis', post: 'hard nut', salary: 800},
  {id: 7, fullName: 'Employee Test', post: 'programmer', salary: 800},
  {id: 8, fullName: 'Employee Test', post: 'programmer', salary: 800},
  {id: 9, fullName: 'Employee Test', post: 'programmer', salary: 8000},
  {id: 10, fullName: 'Employee Test', post: 'programmer', salary: 800},
];
