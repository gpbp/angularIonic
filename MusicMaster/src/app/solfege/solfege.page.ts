import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
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
  startingCourses: Array<Cours>;
  advancedCourses: Array<Cours>;
  expertCourses: Array<Cours>;
  private readonly COLLECTION_URL = 'tutorials/'
  tutorials: Observable<Tutorial[]>;

  constructor(private afs: AngularFirestore, private tutorialsCollection: AngularFirestoreCollection<Tutorial>) { }

  ngOnInit() {
    this.initTutorials();
    // tslint:disable-next-line:max-line-length
    this.startingCourses = new Array<Cours>(new Cours('Symboles de musique', 'https://www.acadezik.com/cours-de-musique/symboles-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'));
    // tslint:disable-next-line:max-line-length
    this.advancedCourses = new Array<Cours>(new Cours('Symboles de musique', 'https://www.acadezik.com/cours-de-musique/symboles-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'));
    // tslint:disable-next-line:max-line-length
    this.expertCourses = new Array<Cours>(new Cours('Symboles de musique', 'https://www.acadezik.com/cours-de-musique/symboles-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'),
        new Cours('Notes de musique', 'https://www.acadezik.com/cours-de-musique/notes-de-musique-base-solfege/'));
  }

  public itemSelected(item: Cours) {
    window.open(item.url, '_blank');
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
