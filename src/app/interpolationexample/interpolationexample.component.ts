import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolationexample',
  templateUrl: './interpolationexample.component.html',
  styleUrls: ['./interpolationexample.component.css']
})
export class InterpolationexampleComponent implements OnInit {
  title = 'Angular Interpolation';

  name = 'Santosh Pun';
  firstName = 'Santosh';
  lastName = 'Pun';

  animal = {
    name: 'Lion',
    image: './assets/images/lion.jpeg'
  };

  productId = 1;
  productName = "Monitor";


  constructor() { }

  ngOnInit(): void {
  }

  greet(): string {
    return "Good Morning !";
  }

}
