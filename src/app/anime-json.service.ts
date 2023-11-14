import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeJsonService {
  constructor(private http: HttpClient) { }

  getJsonAnime(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/Joanutsu/SNK-JSON/SNK ');
  }
}
