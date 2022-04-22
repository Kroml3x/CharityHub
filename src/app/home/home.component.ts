import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Association} from '../class/association'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private httpClient: HttpClient) { 

  }

  ngOnInit(): void {
  }

}
