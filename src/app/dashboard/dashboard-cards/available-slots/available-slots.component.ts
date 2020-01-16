import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-available-slots',
  templateUrl: './available-slots.component.html',
  styleUrls: ['./available-slots.component.scss']
})
export class AvailableSlotsComponent implements OnInit {

  availableDates: Date[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.availableDates = new Array();
    this.http.get('./assets/data/available-dates.json').pipe(map(data => data.json())).subscribe(res => {
      res.availableDates.forEach(date => {
        console.log(new Date(date))
        this.availableDates.push(new Date(date))
      });
     });
  }

}
