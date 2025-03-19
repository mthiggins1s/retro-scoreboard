import { Component } from '@angular/core';
import { ScoreInputComponent } from "./score-input/score-input.component";
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ScoreInputComponent, ScoreboardComponent, CommonModule]
})
export class AppComponent {
  scores = [
    { name: 'AAA', points: 5000 },
    { name: 'BBB', points: 4200 },
    { name: 'CCC', points: 3000 }
  ];

  addScore(newScore: { name: string; points: number }) {
    this.scores.push(newScore);
    this.scores.sort((a, b) => b.points - a.points);
  }
}
