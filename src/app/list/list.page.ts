import { Component, OnInit } from '@angular/core';
import { Productos, ProductoServiceService } from '../services/producto-service.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  products: Productos[];

  constructor(private productoService: ProductoServiceService) {
    this.productoService.getProductos().subscribe(res => {
      this.products = res;
      console.log("error", this.products);
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
