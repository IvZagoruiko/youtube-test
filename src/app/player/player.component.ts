import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlayerOutputs, ISize, PlayerType} from "../services/interfaces";
import {defaultSize} from "../services/constants";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public playerTypes = PlayerType;

  @Input()
  public playerType: PlayerType;
  @Input()
  public id: string;
  @Input()
  public caption: string;

  @Input()
  public size: ISize;

  private playerVars: YT.PlayerVars;
  private playerOutputs: IPlayerOutputs;

  @Output()
  public ready: EventEmitter<YT.Player> = new EventEmitter<YT.Player>();
  @Output()
  public stateChange: EventEmitter<YT.PlayerEvent> = new EventEmitter<YT.PlayerEvent>();
  @Output()
  public playbackQualityChange: EventEmitter<YT.PlayerEvent> = new EventEmitter<YT.PlayerEvent>();
  @Output()
  public playbackRateChange: EventEmitter<YT.PlayerEvent> = new EventEmitter<YT.PlayerEvent>();
  @Output()
  public error: EventEmitter<YT.PlayerEvent> = new EventEmitter<YT.PlayerEvent>();

  constructor() {}

  ngOnInit(): void {
    this.checkFields();

    if (this.playerType === this.playerTypes.youtube) {
      this.playerVars = {};

      this.playerOutputs = {
        ready: this.ready,
        stateChange: this.stateChange,
        playbackQualityChange: this.playbackQualityChange,
        playbackRateChange: this.playbackRateChange,
        error: this.error
      };
    }
  }

  checkFields() {
    if (this.playerType === undefined) {
      throw new Error('player type is required');
    }

    if (!this.id) {
      throw new Error('id is required');
    }

    if (!this.caption) {
      throw new Error('caption is required');
    }

    if (!this.size) {
      this.size = defaultSize;
    }
  }

}
