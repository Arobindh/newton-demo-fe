import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GameService } from '../service/game.service';
import { Game } from '../model/game';
import { Observable, switchMap, catchError, EMPTY, Subject, Subscription } from 'rxjs';
import { EDIT_LABELS } from './edit.labels';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AGE_RATINGS } from '../shared/constants/age-ratings.constants';
import { VALIDATION_MESSAGES } from '../shared/constants/validation-messages.constants';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AlertComponent],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  game$!: Observable<Game>;
  error$: Observable<string>;
  gameId: number = 0;
  labels = EDIT_LABELS;
  ageRatings = AGE_RATINGS;
  validationMessages = VALIDATION_MESSAGES;
  private successSubject = new Subject<string>();
  success$ = this.successSubject.asObservable();
  errorMessage: string | null = null;
  successMessage: string | null = null;
  private errorSubscription?: Subscription;
  private successSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private cdr: ChangeDetectorRef
  ) {
    this.error$ = this.gameService.error$;
  }

  ngOnInit(): void {
    this.errorSubscription = this.error$.subscribe(error => {
      this.errorMessage = error;
      this.cdr.markForCheck();
    });
    
    this.successSubscription = this.success$.subscribe(message => {
      this.successMessage = message;
      this.cdr.markForCheck();
    });
    this.game$ = this.route.params.pipe(
      switchMap(params => {
        this.gameId = +params['id'];
        return this.gameService.getGameById(this.gameId);
      }),
      catchError(() => {
        return EMPTY;
      })
    );
  }

  saveChanges(game: Game): void {
    const gameUpdate: Game = { ...game };
    this.gameService.updateGame(this.gameId, gameUpdate).subscribe({
      next: () => {
        this.successSubject.next(this.labels.messages.updateSuccess);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error: () => { }
    });
  }

  dismissError(): void {
    this.errorMessage = null;
  }

  dismissSuccess(): void {
    this.successMessage = null;
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.errorSubscription?.unsubscribe();
    this.successSubscription?.unsubscribe();
  }
}
