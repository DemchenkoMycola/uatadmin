import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {rejects} from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private firestore: AngularFirestore) { }

  channelsList(): any{
    return this.firestore.collection('channels').snapshotChanges();
  }

  addChannel(channel: {}): any{
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('channels').add(channel).then(res => {}, err => reject(err));
    });
  }
  updateChannel(id, value): any{
    this.firestore.firestore.collection('channels').doc(id).set(value);
  }
  getChannelById(id): any{
    return this.firestore.firestore.collection('channels').doc(id).get().then((r) => r);
  }
  deleteChannel(channelId): any{
    return this.firestore.collection('channels').doc(channelId).delete();
  }
}
