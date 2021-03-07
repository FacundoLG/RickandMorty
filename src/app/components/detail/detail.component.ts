import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  id = 0;
  chName = ''
  chStatus = ''
  chGender = ''
  chLocation = ''
  chOrigin = ''
  chImage = ''
  chSpecie = ''
  chEpisode = ''
  constructor(
    private route: ActivatedRoute,
    private data: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
       this.id = params.id
    })
    this.data.getCharacterbyId(this.id).subscribe(data =>{
      this.chName = data.name
      this.chStatus = data.status
      this.chGender = data.gender
      this.chSpecie = data.species
      this.chImage = data.image
      this.chLocation = data.location.name
      this.chOrigin = data.origin.name
      this.chEpisode = data.episode.length + 1
      console.log(data)
    })
  }

}
