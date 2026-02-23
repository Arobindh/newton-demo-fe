import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, of, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Game } from '../model/game';
import { SERVICE_MESSAGES } from './game.service.messages';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly apiUrl = `${environment.apiUrl}/Games`;
  private gamesSubject = new BehaviorSubject<Game[]>([]);
  public games$ = this.gamesSubject.asObservable();
  private errorSubject = new Subject<string>();
  public error$ = this.errorSubject.asObservable();
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {  }

  loadGames(): void {
    this.loadingSubject.next(true);
    this.http.get<Game[]>(this.apiUrl).pipe(
      tap(games => {
        this.gamesSubject.next(games);
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        const errorMessage = SERVICE_MESSAGES.errors.loadGames;
        this.errorSubject.next(errorMessage);
        this.loadingSubject.next(false);
        return of([]);
      })
    ).subscribe();
  }

  getGames(): Observable<Game[]> {
    return this.games$;
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.errorSubject.next(SERVICE_MESSAGES.errors.getGame);
        return of({} as Game);
      })
    );
  }

  updateGame(id: number, updatedGame: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, updatedGame).pipe(
      tap(updated => {
        const games = this.gamesSubject.value;
        const index = games.findIndex(game => game.id === id);
        
        if (index !== -1) {
          games[index] = updated;
          this.gamesSubject.next([...games]);
        }
      }),
      catchError(error => {
        this.errorSubject.next(SERVICE_MESSAGES.errors.updateGame);
        return throwError(() => error);
      })
    );
  }
}
