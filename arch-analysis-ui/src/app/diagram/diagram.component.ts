import { Component, OnInit } from '@angular/core';
import { GptService } from '../services/gpt.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  url: string = "";
  imagePath: string = "";

  constructor(private _gptService: GptService) { }

  ngOnInit(): void {

  }

  fetchUrl() {
    this.imagePath = this.url;
    this._gptService.loadFile(this.url);
  }

}
