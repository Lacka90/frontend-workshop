import { Component } from "@angular/core";
import { TestServiceService } from "./test-service.service";
import { map, filter, take, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  object = {
    value: 1,
    dog: 3
  };

  title = "This is the course!";
  currentDate$ = this.testService.counter$.pipe(
    take(3),
    filter(value => {
      console.log("filter", value, value % 2 === 0);
      return value % 2 === 0;
    }),
    tap(value => value + 2),
    map(value => {
      console.log("map", value, value * 2);
      return value * 2;
    })
  );

  constructor(private testService: TestServiceService) {}

  mutableChange() {
    this.object.value = 4;
  }

  immutableChange() {
    this.object = { value: 4, dog: this.object.dog };
  }

  handleMessage() {
    this.testService.getCurrentDate();
  }
}
