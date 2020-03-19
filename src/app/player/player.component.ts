import {Component, Input, OnInit} from '@angular/core';
import {PlayerType} from "../services/interfaces";

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

  constructor() { }

  ngOnInit(): void {
  }

}
