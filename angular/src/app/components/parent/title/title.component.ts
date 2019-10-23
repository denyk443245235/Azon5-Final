import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../../services/search.service';
// @ts-ignore
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public Films = null;

  constructor(public service: SearchService, public router: Router) {
  }

  findFilms(text) {
    let keys = Object.keys(localStorage);
    this.service.getFilms(text.value).subscribe((result:any) => {
      if (result) {

        this.Films = result.filter((film) => {
          return !keys.includes(film.Title);
        });

      } else {
        this.Films = null;
      }
    });
  }

  getDetails(film) {
    this.router.navigate(['/details', film]);
  }

  ngOnInit() {
  }

}
