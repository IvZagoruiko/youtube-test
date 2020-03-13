import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // youtubeAPI: string;

  ngOnInit(): void {
    // this.youtubeAPI = environment.youtubeAPI;
  }

}
