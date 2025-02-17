import { Component, OnInit} from '@angular/core';
// import { ProductResponse } from '../../models/product';
import { Product} from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProducts().subscribe((response) =>{
      this.products = response.products;
    })
  }
}
