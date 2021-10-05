import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  displayedColumns = ['id', 'fullName', 'post', 'salary'];
  dataSource = [
    {
      id: 1,
      fullName: 'Kot Oleksii',
      post: 'programmer',
      salary: 1200,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
