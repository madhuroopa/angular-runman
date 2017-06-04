System.register(["angular2/core", "rxjs/Rx", "moment"], function(exports_1, context_1) {
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
    var core_1, Rx_1, moment_1;
    var TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }],
        execute: function() {
            TimerComponent = (function () {
                function TimerComponent() {
                    this.startTime = 1000;
                }
                TimerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Rx_1.Observable
                        .timer(this.startTime, 10)
                        .subscribe(function (t) { return _this.time = moment_1.default(t).format(_this.format); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TimerComponent.prototype, "format", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TimerComponent.prototype, "startTime", void 0);
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: "ng-timer",
                        template: "{{ time }}",
                        inputs: ["startTime", "format"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            }());
            exports_1("TimerComponent", TimerComponent);
        }
    }
});
//# sourceMappingURL=ng2-timer.js.map