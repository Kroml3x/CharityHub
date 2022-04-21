import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Association{
  id : string;
  value : string;
  reg: string;
  Title: string;
  img: string;
}

@Component({
  selector: 'app-associazioni',
  templateUrl: './associazioni.component.html',
  styleUrls: ['./associazioni.component.css']
})
export class AssociazioniComponent implements OnInit {

  associations: Association[]=[];
  constructor(private httpClient: HttpClient) {

    const url = 'http://localhost:3000/associazioni'

    this.httpClient.get<Association[]>(url).subscribe(data => this.associations=data);
  }

  

  ngOnInit(): void {
  }

}
