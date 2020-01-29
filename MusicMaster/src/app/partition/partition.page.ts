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
    console.log(event);
  }


}
