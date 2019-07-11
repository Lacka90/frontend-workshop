import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { TestServiceService } from "../test-service.service";

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent implements OnInit {
  @Input() childtitle = "asd";
  @Input() object;
  @Output() sendMessage: EventEmitter<string> = new EventEmitter();

  constructor(private testService: TestServiceService) {}

  ngOnInit() {}

  changeTitleInParent() {
    const message = "asd";
    this.sendMessage.emit(message);
  }
}
