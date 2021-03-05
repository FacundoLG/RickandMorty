import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  apiData: any = [];
  apiResults: any = [];
  next = '';
  prev = '';
  Search = '';
  constructor(private getData: DataService) { }

  ngOnInit(): void {
    this.getData.getCharacters().subscribe(data => {
      this.apiResults = data.results;
      this.apiData = data.info;
      this.next = data.info.next;
      this.prev = data.info.prev;
      console.log(this.apiData);
      console.log(this.apiResults);
    });
  }
  clean(){
    this.Search = '';
  }
  getCharacter(){
    this.getData.getCharacterbyName(this.Search).subscribe(data => {
      this.apiResults = data.results;
      this.apiData = data.info;
      this.next = data.info.next;
      this.prev = data.info.prev;
    });
  }
  nextPage(): void{
    this.getData.movePage(this.next).subscribe(data =>{
      this.apiResults = data.results;
      this.apiData = data.info;
      this.next = data.info.next;
      this.prev = data.info.prev;
    });
  }
  previusPage(): void{
    this.getData.movePage(this.prev).subscribe(data =>{
      this.apiResults = data.results;
      this.apiData = data.info;
      this.next = data.info.next;
      this.prev = data.info.prev;
    });
  }
}
