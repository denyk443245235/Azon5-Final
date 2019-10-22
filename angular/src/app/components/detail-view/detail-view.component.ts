import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { root } from "rxjs/internal-compatibility";

// @ts-ignore
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  public film;
  public SelectedFilms;

  constructor(public activate: ActivatedRoute, public service: SearchService) {
  }

  chechState = false;

  Change() {
    this.service.SaveSelect(this.film, this.chechState);
    this.chechState = !this.chechState;
    if (this.chechState) {
      this.chechState = false;
    } else {
      this.chechState = true;
    }
  }

  ngOnInit() {
    this.activate.params.forEach((param) => {
      this.film = param;
      this.chechState = param.checked;
      console.log(param);
    });
  }

}
