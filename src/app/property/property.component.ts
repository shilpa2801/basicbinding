import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  enabled = false;
  constructor() {
   setTimeout(() => {
      this.enabled = true;
    }, 3000);
  }
    
  ngOnInit() {
  }
}
