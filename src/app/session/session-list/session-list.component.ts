import { Component, OnInit } from '@angular/core';
import { XkeSession } from 'app/dashboard/dashboard-cards/upcoming-xkes/xke-session.model';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  xkeSessions: XkeSession[];
  nextXKEDate: Date;
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUpcomingXKEs();
  }
  getUpcomingXKEs() {
     this.http.get('./assets/data/paginated-xke-sessions.json').pipe(map(data => data.json())).subscribe(res => {
      this.xkeSessions = res.upcomingXke;
      this.nextXKEDate = res.nextXkeDate;
     });
}
  onSessionSelection(sessionId) {
    this.router.navigate(['/sessions',sessionId])
  }

}
