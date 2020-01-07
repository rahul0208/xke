import { Component, OnInit } from '@angular/core';
import { XkeSession } from './xke-session.model';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { UpcomingXkeSessionResponse } from './upcoming-xke-response.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-upcoming-xkes',
  templateUrl: './upcoming-xkes.component.html',
  styleUrls: ['./upcoming-xkes.component.scss']
})
export class UpcomingXKEsComponent implements OnInit {

  upcomingSessions: XkeSession[];
  nextXKEDate: Date;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getUpcomingXKEs();
  }
  getUpcomingXKEs() {
     this.http.get('./assets/data/upcoming-xke.json').pipe(map(data => data.json())).subscribe(res => {
      this.upcomingSessions = res.upcomingXke;
      this.nextXKEDate = res.nextXkeDate;
     });
}
}
