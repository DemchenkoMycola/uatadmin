import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChanalsService {

  constructor(private firestore: AngularFirestore) { }

  chanalsList(): any{
    return this.firestore.collection('Chanals').snapshotChanges();
  }

  addChanal(chanal: {}): any{
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('Chanals').add(chanal).then(res => {}, err => reject(err));
    });
  }

  deleteChanal(chanalId): any{
    return this.firestore.collection('Chanals').doc(chanalId).delete();
  }
}
