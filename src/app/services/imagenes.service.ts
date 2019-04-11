import { Injectable } from '@angular/core';

import{ AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

export interface Imagenes {
  image_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private imagenesCollection: AngularFirestoreCollection<Imagenes>;
  private imagenes : Observable<Imagenes[]>;

  constructor(db: AngularFirestore) {
    this.imagenesCollection = db.collection<Imagenes>('imagenes');
    this.imagenes = this.imagenesCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );
   }

   getImagenes() {
     return this.imagenes;

   }

   getImagen(id) {
     return this.imagenesCollection.doc<Imagenes>(id).valueChanges();

   }



}
