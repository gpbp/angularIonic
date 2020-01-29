import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.page.html',
  styleUrls: ['./partition.page.scss'],
})
export class PartitionPage implements OnInit {

  constructor(private platform: Platform, private file: File, private ft: FileTransfer,
    private fo: FileOpener, private document: DocumentViewer) { }

  ngOnInit() {
  }

  openSheet() {
    let filePath = this.file.applicationDirectory + 'www/assets';

    if(this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'bourree_pour_clemence.pdf', 
          this.file.dataDirectory, '${fakeName}.pdf').then(result =>{
            this.fo.open(result.nativeURL, 'application/pdf');
          });
    } else {
      const options: DocumentViewerOptions = {
        title: 'Partition'
      }
      this.document.viewDocument('${filePath}/bourree_pour_clemence.pdf', 
        'application.pdf', options);
    }
  }


  importSheet() {
    let downloadURL = 'https://share-etu.istic.univ-rennes1.fr/m2info/PIT/PROJETS/FicheBeauviatech2020.pdf'
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();

    transfer.download(downloadURL, '${path}myfile.pdf').then(entry => {
      let url = entry.toURL();

      if(this.platform.is('ios')) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.fo.open(url, 'application/pdf');
      }
    });
  }

}
