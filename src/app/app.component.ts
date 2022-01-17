import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  image = '/assets/images/marvel.jpeg';
  imgWidth = 500;
  imgHeight = 500;

  color = 'blue';

  myId = 'heading';

  inputValue = 'Santosh';

  styles = {
    color: 'indianred',
    fontSize: '25px',
    opacity: 0.7,
    textAlign: 'center'
  };

  animal = {
    name: 'Lion',
    image: './assets/images/lion.jpeg'
  };

  isDisabled: boolean = true;
  val: number = 1000000;

  hasError: boolean = false;

  fontSize = '25px';
  opacity = 0.7;
}
