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

/**
 * Cette page permet d'accéder à une liste de cours de Solfège
 */
export class SolfegePage implements OnInit {
  private readonly COLLECTION_URL = 'tutorials/';
  tutorials: Observable<Tutorial[]>;

  constructor(private afs: AngularFirestore, private tutorialsCollection: AngularFirestoreCollection<Tutorial>) { }

  ngOnInit() {
    this.initTutorials();
  }

  /**
   * Cette méthode permet d'initialiser la liste des cours depuis Firebase
   */
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

  /**
   * Cette méthode permet de mettre à jour l'attribut done d'un tutoriel dans Firebase
   *
   * @param tutorialToUpdate : Le tutoriel dont on veut mettre à jour l'attribut done
   */
  isDone(tutorialToUpdate: Tutorial) {
    const documentURL = this.COLLECTION_URL + tutorialToUpdate.tutorialId;
    const tutorial = {done: tutorialToUpdate.done};
    this.afs.doc<Tutorial>(documentURL).update(tutorial);
  }

  /**
   * Cette méthode permet d'ouvrir le lien du tutoriel tout en passant l'attribut done à true
   *
   * @param tutorialToGo : le tutoriel que l'on souhaite ouvrir
   */
  goToTutorial(tutorialToGo: Tutorial) {
    tutorialToGo.done = true;
    this.isDone(tutorialToGo);
    window.open(tutorialToGo.link, '_blank');
  }

}
