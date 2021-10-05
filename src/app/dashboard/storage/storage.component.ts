import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  displayedColumns = ['id', 'title', 'count', 'seller'];
  dataSource = [
    {
      id: 1,
      title: 'scooter',
      count: 33,
      seller: 'Rozetka',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
