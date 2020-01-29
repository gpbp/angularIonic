import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-partitions',
  templateUrl: './partitions.page.html',
  styleUrls: ['./partitions.page.scss'],
})
export class PartitionsPage implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  uploadSheet(event) {
    const file = event.target.files[0];
    const filePath = '';
    const task = this.storage.upload(filePath, file);
  }

}
