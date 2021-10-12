import { Component } from '@angular/core';
import * as fcl from '@onflow/fcl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "dnz"
  signUp() {
    fcl.signUp();
  }
}

