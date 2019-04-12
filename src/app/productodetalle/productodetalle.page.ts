import { Component, OnInit } from '@angular/core';

import { Productos, ProductoServiceService } from '../services/producto-service.service';
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

  productoId = null;

  constructor(private route: ActivatedRoute,
     private nav: NavController,
     private productoService: ProductoServiceService,
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
      console.log("error", res);

    });
  }


}
