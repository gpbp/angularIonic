import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar/calendar';
import {AlertController} from '@ionic/angular';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  data = [];

  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    const eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    };
    if (eventCopy.allDay) {
      const start = eventCopy.startTime;
      const end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
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

  // Exportation of the calendar
  exportMyCalendar() {
    this.export2CSV(this.data, DownloadFormat.COMMA, 'agenda.csv', this.myCal);
  }

  /**
   * Format the data from the calendarComponent to a data format adapted for
   * the CSV
   * @param myCal  The component from the Agenda page
   * @param data Data to insert
   * @return formated data for the csv file
   */
  private formatData(myCal: CalendarComponent, data: any[]): any[] {
    const dateformat = new DatePipe(this.locale);
    // Formating data
    myCal.eventSource.forEach((value, index) => {
      data[index] = {
        Subject: value.title,
        StartDate: dateformat.transform(new Date(value.startTime), 'MM/dd/yyyy'),
        StartTime: dateformat.transform(new Date(value.startTime), 'HH:mm'),
        EndDate: dateformat.transform(new Date(value.endTime), 'MM/dd/yyyy'),
        EndTime: dateformat.transform(new Date(value.startTime), 'HH:mm'),
        AllDayEvent: value.allDay
      };
    });
    return data;
  }

  /**
   * Function which is use to export data 2 csv file.
   * @param any[] data Data which we want to download
   * @param DownloadFormat columnDelimiter Delimiter of data file.
   * @param string filename Name of file.
   * @returns boolean True if downloaded successful, False otherwise.
   */
  public export2CSV(data: any[], columnDelimiter: DownloadFormat, filename: string, myCal: CalendarComponent): boolean {
    if (!data || data.length === 0) {
      console.log('false');

      return false;
    }
    data = this.formatData(myCal, data);
    console.log('Formatage fini : ', data);

    const result = this.convertDataToCSV(data, columnDelimiter);
    console.log('Conversion terminé ! : ', result);

    this.downloadCSV(result, filename);
    return true;
  }

  /**
   * Function which is use to convert row data to csv string.
   * @param any[] data Row data which we want to export
   * @param DownloadFormat columnDelimiter Delimiter for CSV file.
   * @returns string return csv data string.
   */
  private convertDataToCSV(data: any[], columnDelimiter: DownloadFormat = DownloadFormat.COMMA): string {

    const lineDelimiter = '\n';
    let fields: string[] = [];
    for (const key in data[0]) {
      if ('object' === typeof data[0][key]) {
        const subFields: string[] = Object.keys(data[0][key]).map((k) => key + '.' + k);
        fields = fields.concat(subFields);
      } else {
        fields.push(key);
      }
    }
    let result = '';
    result += fields.map((field) => field.toUpperCase()).join(columnDelimiter);
    result += lineDelimiter;
    data.forEach((item) => {
      let ctr = 0;
      fields.forEach((key) => {
        if (ctr > 0) {
          result += columnDelimiter;
        }
        if (item[key]) {
          result += item[key];
        } else {
          const subKeys: string[] = key.split('.');
          result += item[subKeys[0]][subKeys[1]];
        }
        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  /**
   * Function which is use to download CSV file of given data.
   * @param string csvdata CSV data string which is going to download.
   * @param string filename Name of file with extension.
   */
  private downloadCSV(csvdata: string, filename: string = 'agenda.csv') {
    if (!csvdata.match(/^data:text\/csv/i)) {
      csvdata = 'data:text/csv;charset=utf-8,' + csvdata;
    }
    if (this.platform.is('desktop')) {
      const data: string = encodeURI(csvdata);
      const link: HTMLElement = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
    } else {
      const filedir = this.file.applicationDirectory;
      return this.file.writeFile(filedir, filename, csvdata, {replace: true}).then(res => {
        console.log('success');
      }).catch(e => {
        console.log('Share failed:', e);
      });
    }
  }
  persistEventToFirebase() {

  }




}
