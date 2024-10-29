import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7031/Product';

  GetProductList() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }
  
}
