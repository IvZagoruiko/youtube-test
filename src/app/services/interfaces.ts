import {EventEmitter} from "@angular/core";

export interface IPlayerAPI {
  checkAPI(): void;
  loadPlayerAPI(): void;
  setupPlayer(config: IPlayerConfig): void;
}

export interface ISize {
  width: number;
  height: number;
}

export interface IPlayerOutputs {
  ready: EventEmitter<YT.Player>;
  stateChange: EventEmitter<YT.PlayerEvent>;
  playbackQualityChange: EventEmitter<YT.PlayerEvent>;
  playbackRateChange: EventEmitter<YT.PlayerEvent>;
  error: EventEmitter<YT.PlayerEvent>;
}

export interface IPlayerConfig {
  playerContainer: HTMLElement;
  videoId: string;
  size: ISize;
  playerVars: YT.PlayerVars;
  playerOutputs: IPlayerOutputs;
}

export enum PlayerType {
  youtube,
  zoom,
  google
}

export enum Autoplay {
  disable,
  enable
}

export enum Subtitles {
  disable,
  enable
}

export enum Controls {
  disable,
  enable = 2
}

export enum Keyboard {
  disable,
  enable
}

export enum FullScreenButton {
  disable,
  enable
}

export enum Hl {
  russian = 'ru',
  english = 'en'
}

export enum YoutubeMark {
  enable,
  disable
}
