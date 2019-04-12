import { Component, OnInit } from '@angular/core';
import { Carrito, CarritoService } from '../services/carrito.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carrito: Carrito[];
  suma: number;

  constructor(private carritoService: CarritoService,
    private alertCtrl: AlertController) {
    this.carritoService.getCarrito().subscribe(res => {
      this.carrito = res;

      var total = 0;
      this.carrito.forEach(x => total += x.price);
      this.suma = total;
      console.log("debug", total);

    });
   }

  ngOnInit() {
  }

  async completeCheckout() {
    const alert = await this.alertCtrl.create({
      header: 'Detalles de compra',
      message: 'Se comprarán los siguientes productos: <br>' + 
      this.carrito.map(({product}) => product) +
       ' y se cargará a su tarjeta un total de $' + this.suma,
       buttons: [
         {text: 'Comprar',
         handler: () => {}
        },
        {
          text: 'Cancelar',
          handler: () => {}
        }
       ]
    });

    await alert.present();

  }

}
