import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './../model/event';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  private readonly COLLECTION_URL = "events";

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  events: Observable<Event[]>;
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  data = [];

  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) private locale: string, 
    private afs: AngularFirestore, 
    private eventsCollection: AngularFirestoreCollection, 
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
    //this.resetEvent();
    //this.initUserId();
    this.initCalendar();
  }

  private resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  private initCalendar() {
    this.eventsCollection = this.afs.collection<Event>(this.COLLECTION_URL);
    this.events = this.eventsCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const event = action.payload.doc.data() as Event;
        for(let date = event.startTime; date < event.endTime; date.setDate(date.getDate() + 1) ) {
          this.myCal.eventSource.push(event);
        }
        return event; 
      }))
    );
    this.myCal.loadEvents();
  }
  // Create the right event format and reload source
  addEvent() {
    const eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      description: this.event.desc,
      userId: this.afAuth.auth.currentUser.uid
    };
    if (eventCopy.allDay) {
      const start = eventCopy.startTime;
      const end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    //this.eventSource.push(eventCopy);
    this.sendEventToFirestore(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  private sendEventToFirestore(eventCopy) {
    this.eventsCollection = this.afs.collection<Event>(this.COLLECTION_URL);
    this.eventsCollection.add(eventCopy);
  }
  // Change current month/week/day
  next() {
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

// Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

// Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

// Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

// Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    const start = formatDate(event.startTime, 'medium', this.locale);
    const end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

// Time slot was clicked
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }



  exportMyCalendar() {

  }

  persistEventToFirebase() {
    
  }




}
