import { Component } from '@angular/core';
import { AuthService } from "./shared/auth.service";
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  private lists: Observable<any[]>;

  constructor(private af: AngularFire) {
    this.lists = this.af.database.list('/lists');
  }

  title = 'Tascal works!';
}
