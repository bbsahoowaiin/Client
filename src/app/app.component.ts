import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Client';
  users: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.loadInitialData()
  }
  loadInitialData() {
   this.http.get('https://localhost:5001/api/users').subscribe(res => {
    this.users = res;
   })
  }
}
