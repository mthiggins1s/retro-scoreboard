import { Component, EventEmitter, Output } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.css']
})
export class ScoreInputComponent {
  playerName = '';
  playerScore!: number;

  @Output() newScore = new EventEmitter<{ name: string; points: number }>();

  submitScore() {
    if (this.playerName && this.playerScore) {
      this.newScore.emit({ name: this.playerName.toUpperCase(), points: this.playerScore });
      this.playerName = '';
      this.playerScore = NaN;
    }
  }
}

const sound = new Howl({
  src: ['assets/submit-sound.mp3']
});

submitScore() {
  if (this.playerName && this.playerScore) {
    this.newScore.emit({ name: this.playerName.toUpperCase(), points: this.playerScore });
    sound.play();
    this.playerName = '';
    this.playerScore = NaN;
  }
}

function submitScore() {
  throw new Error('Function not implemented.');
}

