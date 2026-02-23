import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameService } from '../service/game.service';
import { Observable, Subscription } from 'rxjs';
import { Game } from '../model/game';
import { HOME_LABELS } from './home.labels';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AlertComponent, LoadingSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  games$: Observable<Game[]>;
  error$: Observable<string>;
  loading$: Observable<boolean>;
  labels = HOME_LABELS;
  errorMessage: string | null = null;
  private errorSubscription?: Subscription;

  constructor(private gameService: GameService) {
    this.games$ = this.gameService.getGames();
    this.error$ = this.gameService.error$;
    this.loading$ = this.gameService.loading$;
  }

  ngOnInit(): void {
    this.errorSubscription = this.error$.subscribe(error => {
      this.errorMessage = error;
    });
    
    this.gameService.loadGames();
  }

  dismissError(): void {
    this.errorMessage = null;
  }

  ngOnDestroy(): void {
    this.errorSubscription?.unsubscribe();
  }
}
