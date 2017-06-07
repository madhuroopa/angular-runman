import {Component,OnInit} from 'angular2/core';
import game from './game';
import { TimerService } from './timer.service';
import {Subscription} from 'rxjs/Rx';
import { Observable} from 'rxjs/Rx';

@Component({
    providers: [ TimerService ],
    selector: 'my-app',
    template: `
    <center><h1>Run Man</h1></center>
    <center> <h2>
          {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} <br/>
        </h2></center>
     <div>
          <button [disabled]="start" (click)="startTimer()"type="button" class="btn btn-success btn-circle btn-xl"><i class="glyphicon glyphicon-link"></i>start</button>
          <button [disabled]="stop" (click)="stopTimer()"type="button" class="btn btn-danger btn-circle btn-xl1"><i class="glyphicon glyphicon-link"></i>stop</button>
   </div>
   <div class="board">
        <div *ngFor="#row of board;#rowNo=index" class="row">
            <div *ngFor="#cell of row;#colNo=index" class="cell" (click)="cellClicked(rowNo, colNo)">
             <div *ngIf = "rowNo == 0 && colNo == 0">
              <div class = "flag">
                <img src = "img/flag.png">
              </div>
            </div>
            <div *ngIf = "rowNo == 0 && colNo == 9">
               <img src = "img/tree.png">
            </div>
            <div *ngIf = "rowNo == 2 && colNo == 6">
               <img src = "img/tree.png">
            </div>
            <div *ngIf = "rowNo == 2 && colNo == 7">
               <img src = "img/tree.png">
            </div>
            <div *ngIf = "rowNo == 2 && colNo == 8">
               <img src = "img/tree.png">
            </div>
            <div *ngIf = "rowNo == 2 && colNo == 0">
               <img src = "img/tree.png">
            </div>
            <div *ngIf = "rowNo == 3 && colNo == 0">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 3 && colNo == 5">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 3 && colNo == 6">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 3 && colNo == 7">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 5 && colNo == 3">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 5 && colNo == 4">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 6 && colNo == 2">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 6 && colNo == 3">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 6 && colNo == 8">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 6 && colNo == 11">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 8 && colNo == 5">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 8 && colNo == 6">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 8 && colNo == 7">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 8 && colNo == 8">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 9 && colNo == 0">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 10 && colNo == 0">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 11 && colNo == 3">
               <img src = "img/tree.png">
            </div>
             <div *ngIf = "rowNo == 11 && colNo == 6">
               <img src = "img/tree.png">
            </div>
            <div *ngIf = "rowNo == 11 && colNo == 0">
              <div class = "hero">
                <div class = "hero_image"></div>
              </div>     
            </div>
            <div *ngIf = "rowNo == 0 && colNo == 1">
              <div class = "guard">
                <div class = "guard_image"></div>
              </div>
            </div>
        </div>
    </div> 
</div>
    `
   
})
export class AppComponent  implements OnInit, OnDestroy{ 
   public board = game.createBoard();   
   ticks = 0;
   start = 0;
   private playPauseStopUnsubscribe: any;
    private play: boolean;

    constructor(private timerService: TimerService) {
    }
 
   minutesDisplay: number = 0;
   secondsDisplay: number = 0;
   sub:Subscription<any>;
   OnInit() {
     this.startTimer();
   }
   private startTimer() {
     let timer = Observable.timer(1, 1000);
     this.sub = timer.subscribe(
      t => {
       this.ticks = t;
       this.secondsDisplay = this.getSeconds(this.ticks);
       this.minutesDisplay = this.getMinutes(this.ticks);
       
      }
    );
  }
  
  private getSeconds(ticks: number) {
    let seconds  = 120;
    if (this.ticks > seconds) {
      alert("Game Over !! try again.");
    }
    return this.pad(ticks % 60);
  }
  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }
  private pad(digit: any) { 
    return digit <= 9 ? '0' + digit : digit;
  }
 
    ngOnInit() {
        this.playPauseStopUnsubscribe = this.timerService.playPauseStop$.subscribe((res: any) => this.setPlay(res));       
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.timerService.playTimer();
    }

     stopTimer() {
        this.timerService.stopTimer();
         this.start = 0;
        this.ticks = 0;
        this.minutesDisplay = 0;
        
        this.secondsDisplay = 0;
        if (this.sub) this.sub.unsubscribe();
    }

}
