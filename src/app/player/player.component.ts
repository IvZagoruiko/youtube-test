import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlayerOutputs, ISize, PlayerType} from "../services/interfaces";
import {defaultConfig, defaultSize} from "../services/constants";

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

  @Input()
  public autoplay: boolean;
  @Input()
  public cc_load_policy: boolean;
  @Input()
  public controls: boolean;
  @Input()
  public disablekb: boolean;
  @Input()
  public fs: boolean;
  @Input()
  public hl: string;
  @Input()
  public modestbranding: boolean;
  @Input()
  public origin: string;

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
    this.checkRequiredFields();

    if (this.playerType === this.playerTypes.youtube) {
      this.playerVars = defaultConfig;

      this.playerOutputs = {
        ready: this.ready,
        stateChange: this.stateChange,
        playbackQualityChange: this.playbackQualityChange,
        playbackRateChange: this.playbackRateChange,
        error: this.error
      };
    }

    this.checkFields();
  }

  checkRequiredFields() {
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

  checkFields() {
    if (this.autoplay !== undefined) {
      console.log(this.autoplay);
      this.playerVars.autoplay = this.autoplay ? 1 : 0;
    }

    if (this.cc_load_policy !== undefined) {
      this.playerVars.cc_load_policy = this.cc_load_policy ? 1 : 0;
    }

    if (this.controls !== undefined) {
      this.playerVars.controls = this.controls ? 2 : 0;
    }

    if (this.disablekb !== undefined) {
      this.playerVars.disablekb = this.disablekb ? 1 : 0;
    }

    if (this.fs !== undefined) {
      this.playerVars.fs = this.fs ? 1 : 0;
    }

    if (this.hl !== undefined) {
      this.playerVars.hl = this.hl;
    }

    if (this.modestbranding !== undefined) {
      this.playerVars.modestbranding = this.modestbranding ? 1 : 0;
    }

    if (this.origin !== undefined) {
      this.playerVars.origin = this.origin;
    }
  }

}
