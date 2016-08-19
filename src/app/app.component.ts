import { Component } from '@angular/core';
import { AuthService } from "./shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(authService: AuthService) {

    // authService.signupUser({ email: 'flerp@derp.com', password: 'pw12345'});
  }

  title = 'Tascal works!';
}
