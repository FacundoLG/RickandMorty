import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mainUrl = 'https://rickandmortyapi.com/api/character';
  private searchUrl = 'https://rickandmortyapi.com/api/character/?name='
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get<any>(this.mainUrl);
  }
  movePage(url: string): Observable <any>{
    return this.http.get<any>(url);
  }
  getCharacterbyName(search: string): Observable<any>{
    return this.http.get<any>(this.searchUrl + search)
  }
}
