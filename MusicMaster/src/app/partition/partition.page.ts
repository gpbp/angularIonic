import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.page.html',
  styleUrls: ['./partition.page.scss'],
})
export class PartitionPage implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  uploadSheet(event) {
    const file = event.target.files[0] as File;
    const filePath = 'sheets/' + file.name;
    const task = this.storage.upload(filePath, file);
  }


}
