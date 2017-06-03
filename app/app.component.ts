import {Component} from 'angular2/core';
import game from './game';

@Component({
    selector: 'my-app',
    template: `
   <center> <h1>RUNMAN</h1></center>
    <div class="board">
        <div *ngFor="#row of board;#rowNo=index" class="row">
            <div *ngFor="#cell of row;#colNo=index" class="cell" >
             <div class = "flag" *ngIf = "rowNo == 0 && colNo == 0">
               <img src = "flag.png">
             </div>
             <div *ngIf = "rowNo == 0 && colNo == 2">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 3 && colNo == 4">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 1 && colNo == 5">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 5 && colNo == 2">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 2 && colNo == 5">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 6 && colNo == 2">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 2 && colNo == 4">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 4 && colNo == 2">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 6 && colNo == 7">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 5 && colNo == 7">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 4 && colNo == 7">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 7 && colNo == 7">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 5 && colNo == 1">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 6 && colNo == 1">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 7 && colNo == 1">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 0 && colNo == 8">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 0 && colNo == 9">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 5 && colNo == 9">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 6 && colNo == 9">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 7 && colNo == 5">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 10 && colNo == 5">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 9 && colNo == 0">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 2 && colNo == 9">
               <img src = "tree.png">
             </div>
             <div *ngIf = "rowNo == 11 && colNo == 0">
              <div class = "image">
                <img src = "hero.png">
               </div>
             </div>
         </div>
     </div> 
 </div>
    `
})

export class AppComponent { 
    public board = game.createBoard();   
    
}