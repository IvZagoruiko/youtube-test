import {Injectable} from '@angular/core';
import {IPlayerAPI, IPlayerConfig} from "./interfaces";
import {win, youtubePlayerRef} from "./functions";
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService implements IPlayerAPI {

  private readonly _api: ReplaySubject<void>;
  private _apiLoaded: boolean;

  constructor() {
    this._api = new ReplaySubject<void>(1);
    this._apiLoaded = false;
    this.checkAPI();
  }

  public checkAPI(): void {
    win()['onYouTubeIframeAPIReady'] = () => {
      this._api.next();
    };
  }

  public loadPlayerAPI(): void {
    if (!this._apiLoaded) {
      this._apiLoaded = true;
      const doc = win().document;
      const playerApiScript = doc.createElement('script');
      playerApiScript.type = 'text/javascript';
      playerApiScript.src = 'https://www.youtube.com/iframe_api';
      doc.body.appendChild(playerApiScript);
    }
  }

  public setupPlayer(config: IPlayerConfig): void {
    this._api.subscribe(() => {
      this.createPlayer(config);
    })
  }

  private createPlayer(config: IPlayerConfig): void { //which methods are static
    const player = youtubePlayerRef();

    const { width, height } = config.size;

    new player(config.playerContainer, {
      videoId: config.videoId,
      width: width,
      height: height,
      playerVars: config.playerVars,
      events: {
        onReady: (event: YT.PlayerEvent) => {
          // this.zone.run(() => outputs.ready && outputs.ready.next(ev.target));
          config.playerOutputs.ready && config.playerOutputs.ready.emit(event.target);
        },
        onStateChange: (event: YT.PlayerEvent) => {
          config.playerOutputs.stateChange && config.playerOutputs.stateChange.emit(event);
        },
        onPlaybackQualityChange: (event: YT.PlayerEvent) => {
          config.playerOutputs.playbackQualityChange && config.playerOutputs.playbackQualityChange.emit(event);
        },
        onPlaybackRateChange: (event: YT.PlayerEvent) => {
          config.playerOutputs.playbackRateChange && config.playerOutputs.playbackRateChange.emit(event);
        },
        onError: (event: YT.PlayerEvent) => {
          config.playerOutputs.error && config.playerOutputs.error.emit(event);
        }
      }
    });
  }
}
