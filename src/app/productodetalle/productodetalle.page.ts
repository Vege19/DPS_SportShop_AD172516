import { Component, OnInit } from '@angular/core';

import { Productos, ProductoServiceService } from '../services/producto-service.service';
import { Carrito, CarritoService } from '../services/carrito.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-productodetalle',
  templateUrl: './productodetalle.page.html',
  styleUrls: ['./productodetalle.page.scss'],
})
export class ProductodetallePage implements OnInit {

  producto: Productos = {
    title: null,
    img: null,
    price: null,
    brand: null,
    category: null
  };

  carrito: Carrito = {
    product: null,
    price: null
  };

  productoId = null;

  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private productoService: ProductoServiceService,
    private carritoService: CarritoService,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.productoId = this.route.snapshot.params['id'];

    if (this.productoId) {
      this.loadProducto();
    }

  }

  async loadProducto() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await loading.present();

    this.productoService.getProducto(this.productoId).subscribe(res => {
      loading.dismiss();
      this.producto = res;
      this.carrito.product = this.producto.title;
      this.carrito.price = this.producto.price;
      console.log("error", res);

    });
  }

  async saveCarrito() {
    const loading = await this.loadingController.create({
      message: 'Agregando...'
    });

    await loading.present();

    this.carritoService.addCarrito(this.carrito).then(() => {
      loading.dismiss();
    })
  

  }


}
