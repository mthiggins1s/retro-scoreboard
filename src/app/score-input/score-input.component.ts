import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Howl } from 'howler';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, FormsModule]
})
export class ScoreInputComponent {
  @Input() scores: { name: string; points: number }[] = [];
  playerName = '';
  playerScore!: number;

  @Output() newScore = new EventEmitter<{ name: string; points: number }>();

  // Define Howl instance inside the class
  private sound = new Howl({
    src: ['assets/submit-sound.mp3']
  });

  submitScore() {
    if (this.playerName && this.playerScore) {
      this.newScore.emit({ name: this.playerName.toUpperCase(), points: this.playerScore });
      this.sound.play(); // Play sound
      this.playerName = '';
      this.playerScore = NaN;
    }
  }
}
