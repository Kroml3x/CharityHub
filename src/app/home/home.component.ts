import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Association} from '../class/association'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  associations: Association[]=[];

  constructor(private httpClient: HttpClient) { 

    const url = require('../../server/db.json');

    this.httpClient.get<Association[]>(url).subscribe(data => this.associations=data);
  }

  ngOnInit(): void {
  }

}
