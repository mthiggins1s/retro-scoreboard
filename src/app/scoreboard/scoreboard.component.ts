import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  imports: [CommonModule],
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  @Input() scores: { name: string; points: number }[] = []; // This allows `scores` to be passed from the parent component
}
