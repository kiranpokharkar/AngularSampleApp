import { Component } from '@angular/core';
import { Product } from '../models/products';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  displayedColumns: string[] = ['id', 'title'];
  dataSource: Product[] = [];

  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.GetProductList().subscribe(data => {
      this.dataSource = data;
    });
  }
}
