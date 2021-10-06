import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

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
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'title', 'count', 'seller'];
  dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<StorageItem>(STORAGE_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface StorageItem {
  id: number;
  title: string;
  count: number;
  seller: string;
}

const STORAGE_DATA: StorageItem[] = [
  {id: 1, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 2, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 3, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 4, title: 'scooter', count: 33, seller: 'Brain'},
  {id: 5, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 6, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 7, title: 'scooter', count: 33, seller: 'Allo'},
  {id: 8, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 9, title: 'scooter', count: 33, seller: 'Rozetka'},
  {id: 10, title: 'scooter', count: 33, seller: 'Rozetka'},
];
