import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  progress: number = 0;
  progressSubscription!: Subscription;

  ngOnInit() {
    this.progressSubscription = interval(1000).subscribe(() => {
      this.progress = (this.progress + 3) %101;
    });
  }

  ngOnDestroy() {
    this.progressSubscription.unsubscribe();
  }
}
