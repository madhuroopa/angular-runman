System.register(['angular2/core', './game', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.board = game_1.default.createBoard();
                    this.ticks = 0;
                    this.minutesDisplay = 0;
                    this.secondsDisplay = 0;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.startTimer();
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    if (this.sub) {
                        this.sub.unsubscribe();
                    }
                };
                AppComponent.prototype.startTimer = function () {
                    var _this = this;
                    var timer = Rx_1.Observable.timer(1, 1000);
                    this.sub = timer.subscribe(function (t) {
                        _this.ticks = t;
                        _this.secondsDisplay = _this.getSeconds(_this.ticks);
                        _this.minutesDisplay = _this.getMinutes(_this.ticks);
                    });
                };
                AppComponent.prototype.getSeconds = function (ticks) {
                    var seconds = 210;
                    if (this.ticks > seconds) {
                        alert("Game Over !! try again.");
                    }
                    return this.pad(ticks % 60);
                };
                AppComponent.prototype.getMinutes = function (ticks) {
                    return this.pad((Math.floor(ticks / 60)) % 60);
                };
                AppComponent.prototype.pad = function (digit) {
                    return digit <= 9 ? '0' + digit : digit;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <center><h1>Run Man</h1></center>\n    <center> <h2>\n          {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} <br/>\n        </h2></center>\n \n    <div class=\"board\">\n        <div *ngFor=\"#row of board;#rowNo=index\" class=\"row\">\n            <div *ngFor=\"#cell of row;#colNo=index\" class=\"cell\" (click)=\"cellClicked(rowNo, colNo)\">\n             <div *ngIf = \"rowNo == 0 && colNo == 0\">\n              <div class = \"flag\">\n                <img src = \"img/flag.png\">\n              </div>\n            </div>\n            <div *ngIf = \"rowNo == 0 && colNo == 9\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 7\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 8\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 3 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 3 && colNo == 5\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 3 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 3 && colNo == 7\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 5 && colNo == 3\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 5 && colNo == 4\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 2\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 3\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 8\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 11\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 5\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 7\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 8\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 9 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 10 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 11 && colNo == 3\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 11 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 11 && colNo == 0\">\n              <div class = \"hero\">\n                <div class = \"hero_image\"></div>\n              </div>     \n            </div>\n            <div *ngIf = \"rowNo == 0 && colNo == 1\">\n              <div class = \"guard\">\n                <div class = \"guard_image\"></div>\n              </div>\n            </div>\n        </div>\n    </div> \n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map