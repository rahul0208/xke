import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionListComponent } from './session-list/session-list.component';

@NgModule({
  declarations: [SessionDetailsComponent, SessionListComponent],
  imports: [
    CommonModule
  ]
})
export class SessionModule { }
