import { Component, OnInit } from '@angular/core';
import {Speaker} from '../speaker.model';
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers: Speaker[];
  constructor() {
    this.speakers = new Array();
  }

  ngOnInit() {
    const mohit: Speaker = new Speaker();
    mohit.imageUrl = 'https://www.gravatar.com/avatar/b4ff48b78747db46a1b7b578d992da33.jpg?s=250';
    mohit.designation = 'Principal Consultant'
    mohit.name = 'Mohit Kanwar'
    mohit.description = 'Let\'s Code'
    this.speakers.push(mohit);
    const shekhar: Speaker = new Speaker();
    shekhar.imageUrl = 'https://media.licdn.com/dms/image/C4E03AQHBgnc8cL6B0A/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=cCZJKtgVHXAP0n2g8mD9NoMQLzEbdm6StqY6rX1GsjU';
    shekhar.designation = 'Director Technology'
    shekhar.name = 'Shekhar Gulati'
    shekhar.description = 'I write code'
    this.speakers.push(shekhar);
  }

}
