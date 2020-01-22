import { Component, OnInit } from '@angular/core';
import {Calendar} from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private calendar: Calendar) { }


  ngOnInit() {
    this.calendar.createCalendar('MyCalendar').then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
    );
  }

}
