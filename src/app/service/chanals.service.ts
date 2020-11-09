import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {rejects} from 'assert';

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
  updateChannel(id, value): any{
    this.firestore.firestore.collection('Chanals').doc(id).set(value);
  }
  getChannelById(id): any{
    return this.firestore.firestore.collection('Chanals').doc(id).get().then((r) => r);
  }
  deleteChanal(chanalId): any{
    return this.firestore.collection('Chanals').doc(chanalId).delete();
  }
}
