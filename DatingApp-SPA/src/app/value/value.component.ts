import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Value {
  id: number;
  name: string;
}

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  values: Value[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http
      .get<Value[]>('http://localhost:5000/api/values')
      .subscribe(values => (this.values = values), error => console.log(error));
  }
}
