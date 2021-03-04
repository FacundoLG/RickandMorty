import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  apiData:any = [];
  apiResults:any = [];
  constructor(private getData: DataService) { }

  ngOnInit(): void {
    this.getData.getCharacters().subscribe(data => {
      this.apiResults = data.results;
      this.apiData = data.info;
      console.log(this.apiData);
      console.log(this.apiResults);
    })
  }

}
