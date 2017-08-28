import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routed-example',
  templateUrl: './routed-example.component.html',
  styleUrls: ['./routed-example.component.scss']
})
export class RoutedExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(event) {
    console.log(event.srcElement);
  }
}
