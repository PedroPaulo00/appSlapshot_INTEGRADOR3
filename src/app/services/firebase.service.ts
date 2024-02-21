import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }

  addUserDetails(uid: string, userDetails: any) {
    return this.firestore.collection('users').doc(uid).set(userDetails);
  }

  addPartida(partidaData: any) {
    return this.firestore.collection('partidas').add(partidaData);
  }

  getUserDetails(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  getTeamDetails(nomeTime: string) {
    return this.firestore.collection('times').doc(nomeTime).valueChanges();
  }

  // Adicione mais métodos conforme necessário para recuperar ou atualizar dados do Firestore.
}
