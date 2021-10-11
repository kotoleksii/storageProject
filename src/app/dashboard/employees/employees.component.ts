import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {Subject} from "rxjs";
import {MatSort} from "@angular/material/sort";
import {IEmployee} from "../../shared/interfaces/interfaces";
import {DashboardService} from "../dashboard.service";
import {MatDialog} from "@angular/material/dialog";
import {AddModalEmployeeComponent} from "../../shared/components/add-modal-employee/add-modal-employee.component";

export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'fio', 'position', 'salary', 'actions'];
  //public dataSource: IEmployee[] = [];
  public dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | undefined;


  constructor(private dashboardService: DashboardService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAndSetEmployeeItems();
  }

  public getAndSetEmployeeItems(): void {
    this.dashboardService.getEmployeeItems().subscribe((res: IEmployee[]) => {
      this.dataSource = res;
      const EMPLOYEE_DATA = res;
      this.dataSource = new MatTableDataSource<any>(EMPLOYEE_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public deleteEmployeeItem(id: number): void {
    this.dashboardService.removeEmployeeItem(id).subscribe(res => {
      this.dataSource = res;
    })
  }

  public openDialog(method: string, dataToEdit?: any): void {
    const dialogRef = this.dialog.open(AddModalEmployeeComponent, {
      data: {
        method: method,
        initialValue: dataToEdit,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAndSetEmployeeItems();
    });
  }

  ngAfterViewInit() {
    // this.dataSource = new MatTableDataSource<any>(EMPLOYEE_DATA);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// export interface EmployeeItem {
//   id: number;
//   fullName: string;
//   post: string;
//   salary: number;
// }
//
// const EMPLOYEE_DATA: EmployeeItem[] = [
//   {id: 1, fullName: 'Test1 Test1', post: 'programmer', salary: 1200},
//   {id: 2, fullName: 'Test2 Test2', post: 'programmer', salary: 1000},
//   {id: 3, fullName: 'Test4 Test3', post: 'programmer', salary: 1200},
//   {id: 4, fullName: 'Test4 Test4', post: 'programmer', salary: 1200},
//   {id: 5, fullName: 'Employee Test', post: 'test', salary: 500},
//   {id: 6, fullName: 'Bruce Willis', post: 'hard nut', salary: 800},
//   {id: 7, fullName: 'Employee Test', post: 'programmer', salary: 800},
//   {id: 8, fullName: 'Employee Test', post: 'programmer', salary: 800},
//   {id: 9, fullName: 'Employee Test', post: 'programmer', salary: 8000},
//   {id: 10, fullName: 'Employee Test', post: 'programmer', salary: 800},
// ];
