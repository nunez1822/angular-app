import { Component } from '@angular/core';
import {TestingComponent} from './testing/testing.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TestingComponent]
})
export class AppComponent {
  title = 'app works!';
}
