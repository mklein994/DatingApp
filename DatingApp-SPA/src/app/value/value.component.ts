import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  value: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getValues() {
    this.http
      .get('http://localhost:5000/api/values')
      .subscribe(values => this.value = values);
  }
}
