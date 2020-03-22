import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {YoutubeService} from "../services/youtube.service";
import {IPlayerConfig, IPlayerOutputs, ISize} from "../services/interfaces";

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
  @Input()
  public size: ISize;
  @Input()
  public playerVars: YT.PlayerVars;
  @Input()
  public playerOutputs: IPlayerOutputs;

  @ViewChild('player')
  public playerContainer: ElementRef;

  constructor(
    private _youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this._youtubeService.loadPlayerAPI();
  }

  ngAfterViewInit(): void {
    const config: IPlayerConfig = {
      playerContainer: this.playerContainer.nativeElement,
      videoId: this.id,
      size: this.size,
      playerVars: this.playerVars,
      playerOutputs: this.playerOutputs
    };

    this._youtubeService.setupPlayer(config);
  }

}
