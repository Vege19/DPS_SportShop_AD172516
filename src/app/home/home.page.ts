import { Component, OnInit } from '@angular/core';
import { Imagenes, ImagenesService } from '../services/imagenes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //arreglo de imagenes obtenidas desde firebase
  slideData: String[];

  constructor(private imagenesService: ImagenesService) {}

  ngOnInit() {
    this.imagenesService.getImagenes().subscribe(res => {
      //se obtiene el atributo de img_url y se guarda en un arreglo de strings
      this.slideData = res.map(({image_url}) => image_url);
      console.log("error", this.slideData);
    });
  }


  
}
