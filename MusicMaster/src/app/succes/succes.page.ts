import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Tutorial} from '../model/tutorial';
import {Succes} from '../model/succes';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.page.html',
  styleUrls: ['./succes.page.scss'],
})
export class SuccesPage implements OnInit {
    private readonly COLLECTION_URL = 'succes/';
    succes: Observable<Succes[]>;
    private succesCollection: AngularFirestoreCollection<Succes>;

    constructor(private afs: AngularFirestore, private tutorialsCollection: AngularFirestoreCollection<Tutorial>) { }

  ngOnInit() {
      this.initSucces();
    }

    private initSucces() {
        this.succesCollection = this.afs.collection<Succes>(this.COLLECTION_URL);
        this.succes = this.succesCollection.snapshotChanges().pipe(
            map(actions => actions.map(action => {
                const succes = action.payload.doc.data() as Succes;
                const succesId = action.payload.doc.id;
                return {succesId, ...succes};
            }))
        );
    }

    isDone(succesToUpdate: Succes) {
        const documentURL = this.COLLECTION_URL + succesToUpdate.succesId;
        const succes = {done: succesToUpdate.done};
        this.afs.doc<Tutorial>(documentURL).update(succes);
    }
}
