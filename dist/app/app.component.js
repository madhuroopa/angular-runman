System.register(['angular2/core', './game'], function(exports_1, context_1) {
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
    var core_1, game_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.board = game_1.default.createBoard();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <center><h1>Run Man</h1></center>\n    <div class=\"board\">\n        <div *ngFor=\"#row of board;#rowNo=index\" class=\"row\">\n            <div *ngFor=\"#cell of row;#colNo=index\" class=\"cell\" (click)=\"cellClicked(rowNo, colNo)\">\n             <div *ngIf = \"rowNo == 0 && colNo == 0\">\n              <div class = \"flag\">\n                <img src = \"img/flag.png\">\n              </div>\n            </div>\n            <div *ngIf = \"rowNo == 0 && colNo == 9\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 7\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 8\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 2 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 3 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 3 && colNo == 5\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 3 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 3 && colNo == 7\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 5 && colNo == 3\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 5 && colNo == 4\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 2\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 3\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 8\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 6 && colNo == 11\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 5\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 7\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 8 && colNo == 8\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 9 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 10 && colNo == 0\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 11 && colNo == 3\">\n               <img src = \"img/tree.png\">\n            </div>\n             <div *ngIf = \"rowNo == 11 && colNo == 6\">\n               <img src = \"img/tree.png\">\n            </div>\n            <div *ngIf = \"rowNo == 11 && colNo == 0\">\n              <div class = \"hero\">\n                <div class = \"hero_image\"></div>\n              </div>     \n            </div>\n            <div *ngIf = \"rowNo == 0 && colNo == 1\">\n              <div class = \"guard\">\n                <div class = \"guard_image\"></div>\n              </div>\n            </div>\n        </div>\n    </div> \n</div>\n    "
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