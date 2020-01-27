import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({ 
  selector: 'app-solfege',
  templateUrl: './solfege.page.html',
  styleUrls: ['./solfege.page.scss'],
})
export class SolfegePage implements OnInit {
  private readonly COLLECTION_URL = 'tutorials/'
  tutorials: Observable<Tutorial[]>;

  constructor(private afs: AngularFirestore, private tutorialsCollection: AngularFirestoreCollection<Tutorial>) { }

  ngOnInit() {
    this.initTutorials();
  }

  private initTutorials() {
    this.tutorialsCollection = this.afs.collection<Tutorial>(this.COLLECTION_URL);
    this.tutorials = this.tutorialsCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const tutorial = action.payload.doc.data() as Tutorial;
        const tutorialId = action.payload.doc.id;
        return {tutorialId, ...tutorial};
      }))
    );
  }

  isDone(tutorialToUpdate: Tutorial) {
    const documentURL = this.COLLECTION_URL + tutorialToUpdate.tutorialId;
    const tutorial = {done: tutorialToUpdate.done};
    this.afs.doc<Tutorial>(documentURL).update(tutorial);
  }

}
