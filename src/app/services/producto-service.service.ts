import { Injectable } from '@angular/core';

import{ AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

export interface Productos {
  id?: string;
  title: string;
  img: string;
  price: number;
  brand: string;
  category: string;

}

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  private productosCollection: AngularFirestoreCollection<Productos>;
  private productos : Observable<Productos[]>;

  constructor(db: AngularFirestore) {
    this.productosCollection = db.collection<Productos>('productos');
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );
   }

   getProductos() {
     return this.productos;

   }

   getProducto(id) {
    return this.productosCollection.doc<Productos>(id).valueChanges();

  }
}
