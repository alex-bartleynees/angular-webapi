import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Image } from './Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  image: Image[] = [];

  constructor(private apiService: ApiService) {}

  getImage() {
    this.apiService.getImage().subscribe((data) => (this.image = data));
  }
}
