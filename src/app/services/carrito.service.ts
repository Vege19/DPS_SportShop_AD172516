import { Injectable } from '@angular/core';

import{ AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

export class Carrito {
  id?: string;
  product: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoCollection: AngularFirestoreCollection<Carrito>;
  private carrito : Observable<Carrito[]>;

  constructor(db: AngularFirestore) {
    this.carritoCollection = db.collection<Carrito>('carrito');
    this.carrito = this.carritoCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );
   }

   getCarrito() {
     return this.carrito;

   }

   getProducto(id) {
    return this.carritoCollection.doc<Carrito>(id).valueChanges();

  }

  addCarrito(carrito: Carrito) {
    return this.carritoCollection.add(carrito);
  }

}
