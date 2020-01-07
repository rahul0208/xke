import { NgModule } from '@angular/core';
import {LogPipe} from './log.pipe';

 @NgModule({
     imports:        [],
     declarations:   [LogPipe],
     exports:        [LogPipe],
 })

 export class PipeModule {

   static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
 }
