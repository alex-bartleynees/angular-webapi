import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './Image';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://api.nasa.gov/planetary/apod?api_key=23eq7azlbAPmUf2wxaWbsPKUy2c2WK9gbCY97eTQ&count=1';

  constructor(private http: HttpClient) {}

  getImage(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl);
  }
}
