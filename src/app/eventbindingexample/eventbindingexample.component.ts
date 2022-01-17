import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindingexample',
  templateUrl: './eventbindingexample.component.html',
  styleUrls: ['./eventbindingexample.component.css']
})
export class EventbindingexampleComponent implements OnInit {
  username: string;
  name: string = 'Anynomous';
  eventName: string;

  constructor() { }

  ngOnInit() {
  }

  onSave(): void {
    console.log("Save method called");
  }

  updateName(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  changeText(mytext: string) {
    console.log("Change text is ", mytext);
  }
}
