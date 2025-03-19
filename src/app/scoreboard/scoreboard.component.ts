import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  imports: [CommonModule],
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  scores = [
    { name: 'AAA', points: 5000 },
    { name: 'BBB', points: 4200 },
    { name: 'CCC', points: 3000 }
  ];
}
