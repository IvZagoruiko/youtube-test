import {ElementRef, EventEmitter} from "@angular/core";

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
  ready?: EventEmitter<YT.Player>;
  stateChange?: EventEmitter<YT.PlayerEvent>;
  playbackQualityChange?: EventEmitter<YT.PlayerEvent>;
  playbackRateChange?: EventEmitter<YT.PlayerEvent>;
  error?: EventEmitter<YT.PlayerEvent>;
}

export interface IPlayerConfig {
  playerContainer: ElementRef;
  videoId: string;
  size?: ISize;
  playerVars?: YT.PlayerVars;
  playerOutputs?: IPlayerOutputs;
}

export enum PlayerType {
  youtube,
  zoom,
  google
}
