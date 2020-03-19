import {ElementRef, Injectable} from '@angular/core';
import {PlayerAPI, Size} from "./interfaces";
import {win, youtubePlayerRef} from "./functions";
import {ReplaySubject} from "rxjs";
import {defaultSizes} from "./constants";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService implements PlayerAPI {

  private readonly _api: ReplaySubject<void>;
  private _apiLoaded: boolean;

  get API(): ReplaySubject<void> {
    return this._api;
  }

  set APILoaded(newValue: boolean) {
    this._apiLoaded = newValue;
  }

  get APILoaded(): boolean {
    return this._apiLoaded;
  }

  constructor() {
    this._api = new ReplaySubject<void>(1);
    this.APILoaded = false;
    this.checkAPI();
  }

  checkAPI(): void {
    win()['onYouTubeIframeAPIReady'] = () => {
      this.API.next();
    };
  }

  loadPlayerAPI(): void {
    if (!this.APILoaded) {
      this.APILoaded = true;
      const doc = win().document;
      const playerApiScript = doc.createElement('script');
      playerApiScript.type = 'text/javascript';
      playerApiScript.src = 'https://www.youtube.com/iframe_api';
      doc.body.appendChild(playerApiScript);
    }
  }

  setupPlayer(
    playerContainer: ElementRef,
    videoId: string,
    size: Size = defaultSizes
  ): void {
    this._api.subscribe(() => {
      console.log('create');
      this.createPlayer(
        playerContainer,
        videoId,
        size
      );
    })
  }

  private createPlayer(
    playerContainer: ElementRef,
    videoId: string,
    size: Size = defaultSizes
  ): void {
    const player = youtubePlayerRef();
    const {width, height} = size;
    return new player(playerContainer, {
      width,
      height,
      videoId
    });
  }

  toggleFullScreen(player: YT.Player, setFullScreen: boolean): void {
    let width: number;
    let height: number;

    if (setFullScreen) {
      width = win().innerWidth;
      height = win().innerHeight;
    } else {
      width = defaultSizes.width;
      height = defaultSizes.height;
    }

    player.setSize(width, height);
  }

}
