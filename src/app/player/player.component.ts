import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Autoplay,
  Controls,
  FullScreenButton,
  Hl,
  IPlayerOutputs,
  ISize,
  Keyboard,
  PlayerType,
  Subtitles,
  YoutubeMark
} from "../services/interfaces";
import {defaultSize} from "../services/constants";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input()
  public playerType: PlayerType;
  @Input()
  public id: string;
  @Input()
  public caption: string;

  @Input()
  public size: ISize = defaultSize;

  @Input()
  public autoplay: Autoplay = Autoplay.disable;
  @Input()
  public cc_load_policy: Subtitles = Subtitles.enable;
  @Input()
  public controls: Controls = Controls.enable;
  @Input()
  public disablekb: Keyboard = Keyboard.enable;
  @Input()
  public fs: FullScreenButton = FullScreenButton.enable;
  @Input()
  public hl: Hl = Hl.russian;
  @Input()
  public modestbranding: YoutubeMark = YoutubeMark.disable;
  @Input()
  public origin: string; /////////

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

  public playerTypes = PlayerType;

  public playerVars: YT.PlayerVars;
  public playerOutputs: IPlayerOutputs;

  constructor() {}

  ngOnInit(): void {
    this.checkFields();

    if (this.playerType === this.playerTypes.youtube) {
      this.playerVars = {
        autoplay: this.autoplay as number,
        cc_load_policy: this.cc_load_policy as number,
        controls: this.controls as number,
        disablekb: this.disablekb as number,
        fs: this.fs as number,
        hl: this.hl as string,
        modestbranding: this.modestbranding as number
      };

      this.playerOutputs = {
        ready: this.ready,
        stateChange: this.stateChange,
        playbackQualityChange: this.playbackQualityChange,
        playbackRateChange: this.playbackRateChange,
        error: this.error
      };
    }
  }

  private checkFields(): void {
    if (this.playerType === undefined) {
      throw new Error('player type is required');
    }

    if (!this.id) {
      throw new Error('id is required');
    }

    if (!this.caption) {
      throw new Error('caption is required');
    }
  }
}
