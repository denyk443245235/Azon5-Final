import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../../services/search.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  public keys = Object.values(localStorage);
  public SelectedFilms;
  constructor(public service: SearchService, public router: Router) {
  }
  ngOnInit() {
    this.service.getSelected(this.keys).subscribe((result) => {
      this.SelectedFilms = result;
    });
  }
  getDetails(film) {
    film.checked = true;
    this.router.navigate(['/details', film]);
  }
  Delete(name) {
    localStorage.removeItem(name);
    this.router.navigateByUrl('/details', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/parent']);
    })
  }
}
