import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';

@Component({
  selector: 'app-solfege',
  templateUrl: './solfege.page.html',
  styleUrls: ['./solfege.page.scss'],
})
export class SolfegePage implements OnInit {
  startingCourses: Array<Cours>;
  advancedCourses: Array<Cours>;
  expertCourses: Array<Cours>;

  constructor() { }

  ngOnInit() {
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

}
