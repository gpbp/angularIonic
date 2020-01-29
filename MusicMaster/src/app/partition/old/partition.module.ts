import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartitionPageRoutingModule } from './partition-routing.module';

import { PartitionPage } from './partition.page';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartitionPageRoutingModule,
  ],
  providers: [
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer
  ],
  declarations: [PartitionPage]
})
export class PartitionPageModule {}
