import { Injectable } from "@angular/core";
import { Subject, interval } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestServiceService {
  counter$ = interval(1000);

  constructor() {}

  getCurrentDate() {
    const date = new Date();
    // this.counter$.next(date);
  }
}
