import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input()
  id: string;
  @Input()
  live: boolean;
  @Input()
  width: string;
  @Input()
  height: string;

  youtubeBaseUrl: string;
  youtubeUrl: string;

  constructor() { }

  ngOnInit() {
    this.checkFields();

    this.youtubeBaseUrl = environment.youtubeBaseUrl;
    if (this.live) {
      this.youtubeUrl = `${this.youtubeBaseUrl}/live_stream?channel=${this.id}`;
    } else {
      this.youtubeUrl = `${this.youtubeBaseUrl}/${this.id}`;
    }

    console.log(this.youtubeUrl);
  }

  checkFields() {
    if (!this.width) {
      this.width = '800';
    }

    if (!this.height) {
      this.height = '450';
    }

    if (!this.id) {
      throw new Error('Id is required');
    }
  }

}
