import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solfege',
  templateUrl: './solfege.page.html',
  styleUrls: ['./solfege.page.scss'],
})
export class SolfegePage implements OnInit {
    cours1: boolean;
  cours2: boolean;
  cours3: boolean;
  cours4: boolean;
  cours5: boolean;
  cours6: boolean;
  cours7: boolean;

  constructor() { }

  ngOnInit() {}

}
