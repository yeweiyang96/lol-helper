import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Championjson} from './pojo/championjson';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private heroesUrl = 'http://localhost:4200/lol/8.20.1/data/zh_CN';  // URL to web api

  constructor(
    private http: HttpClient,
   ) {
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Championjson> {
    const url = `${this.heroesUrl}/champion.json`;
    return this.http.get<Championjson>(url);
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: string): Observable<Championjson> {
    const url = `${this.heroesUrl}/champion/${id}.json`;
    return this.http.get<Championjson>(url);
  }

  /** PUT: update the hero on the server */
  /*updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }*/

  /** POST: add a new hero to the server */
  /*addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero_: Hero) => this.log(`added hero w/ id=${hero_.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }*/

  /** DELETE: delete the hero from the server */
  /*deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }*/

  /* GET heroes whose name contains search term */
  /*searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/name?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }*/
}
