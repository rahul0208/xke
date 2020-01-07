import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerComponent } from './speaker/speaker.component';

@NgModule({
  declarations: [SpeakersComponent, SpeakerComponent],
  exports:[SpeakersComponent],
  imports: [
    CommonModule
  ]
})
export class SpeakersModule { }
