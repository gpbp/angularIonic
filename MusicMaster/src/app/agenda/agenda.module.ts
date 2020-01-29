import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {File} from '@ionic-native/file/ngx';
import {AlertController, IonicModule, Platform} from '@ionic/angular';
import {AgendaPageRoutingModule} from './agenda-routing.module';
import {NgCalendarModule} from 'ionic2-calendar';
import {AgendaPage} from './agenda.page';
import {ExportData} from '../services/export_data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    NgCalendarModule
  ],

  declarations: [AgendaPage],
  providers: [
    File,
    AlertController,
    Platform
  ]
})
export class AgendaPageModule {}
