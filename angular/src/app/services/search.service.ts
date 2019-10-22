import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http: HttpClient) {
  }

  getFilms(val) {
    let keys = Object.keys(localStorage);

    return this.http.get(`http://localhost:8080/films/search/?text=${val}`)


  }

  SaveSelect(film, state) {
    if (state) {
      localStorage.setItem(film.Title, film.imdbID);
    } else {
      localStorage.removeItem(film.Title, film.imdbID);
    }
  }

  getSelected(keys) {
    return this.http.post(`http://localhost:8080/films/getSelected`, {mas: keys});
  }
}
