import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input()
  imageUrl: string;
  @Input()
  designation: string;
  @Input()
  name: string;
  @Input()
  description: string;


  constructor() { }

  ngOnInit() {
  }

}
