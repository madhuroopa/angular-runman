import { Component } from 'angular2/core';
import { MyTitle } from './my-title/my-title';

@Component({

    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ MyTitle ]
})
export class AppComponent { }
