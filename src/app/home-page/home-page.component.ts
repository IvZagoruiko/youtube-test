import { Component, OnInit } from '@angular/core';
import {PlayerType} from "../services/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public playerTypes = PlayerType;

  constructor() { }

  ngOnInit(): void {
  }

}
