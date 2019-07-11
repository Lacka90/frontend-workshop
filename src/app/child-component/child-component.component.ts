import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent implements OnInit {
  @Input() childtitle = "Initial child title";
  @Input() object;
  @Output() sendMessage: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  changeTitleInParent() {
    const message = "Title changed from child component";
    this.sendMessage.emit(message);
  }
}
