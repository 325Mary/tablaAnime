import { Component, OnInit } from '@angular/core';
import { AnimeJsonService } from '../anime-json.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonAnime: any;

  constructor(private jsonAnimeService: AnimeJsonService) {}

  ngOnInit() {
    this.jsonAnimeService.getJsonAnime().subscribe((data: any) => {
      this.jsonAnime = data;
      console.log(this.jsonAnime); 
      
    });
  }
}
