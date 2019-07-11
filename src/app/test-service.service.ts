import { Injectable } from "@angular/core";
import { Subject, interval } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestServiceService {
  date$ = new Subject();
  intervalCounter$ = interval(1000);

  constructor() {}

  getCurrentDate() {
    const date = new Date();
    this.date$.next(date);
  }
}
