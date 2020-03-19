import {ReplaySubject} from "rxjs";

export interface PlayerAPI {
  API: ReplaySubject<void>;
  APILoaded: boolean;

  checkAPI(): void;
  loadPlayerAPI(): void;
  // setupPlayer(): void;
  // createPlayer(): void;
  toggleFullScreen(player: YT.Player, setFullScreen: boolean): void;
}

export interface Size {
  width: number;
  height: number;
}

export enum PlayerType {
  youtube,
  zoom,
  google
}
