import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {YoutubeService} from "../services/youtube.service";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, AfterViewInit {

  @Input()
  public id: string;
  @Input()
  public caption: string;
  @ViewChild('player')
  public playerContainer: ElementRef;

  constructor(
    private _youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this._youtubeService.loadPlayerAPI();
  }

  ngAfterViewInit(): void {
    this._youtubeService.setupPlayer(this.playerContainer.nativeElement, this.id);
  }

}
