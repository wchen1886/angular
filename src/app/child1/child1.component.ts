import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  countries: string[] = [];
  constructor() {
   }

  ngOnInit(): void {
    this.countries = this.getData();  
  }


  getData() {
    return ['USA', 'England'];
  }

  onChanged(event: any) {
    var selectElement = event.target;

    var value = selectElement.value;
    console.log(value)
    this.emitter.emit(value);
  }

}
