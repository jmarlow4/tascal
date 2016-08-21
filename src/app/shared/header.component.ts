import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-header',
  template: `
    <nav class="nav">
      <div class="nav-left">
        <h3 class="nav-item title">TASCAL</h3>
      </div>
      <div class="nav-right">
        <div class="nav-item">
          <button 
            class="button"
            [ngClass]="{'is-primary' : isAuthenticated}"
            (click)="showUserBox()">
            <i [ngClass]="{'icon-user' : !userBoxShown, 'icon-close' : userBoxShown}"></i>
          </button>
        </div>
        <tas-loginbox *ngIf="userBoxShown && !isAuthenticated"></tas-loginbox>
        
        <div *ngIf="userBoxShown && isAuthenticated">
          <div class="panel profile-box">
            <div class="panel-block">
              <div class="content">
                <p>Signed in as <strong>{{userEmail}}</strong></p>
                <button class="button is-primary is-fullwidth" (click)="logout()">
                  <i class="icon-logout"></i>&nbsp;Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .profile-box {
      position: absolute;
      top: 60px;
      right: 8px;
      width: 250px;
      background: white;
    }
    
    .content {
      text-align: left;
    }
  `]
})
export class HeaderComponent {

  private isAuthenticated: boolean;
  private userEmail: string;
  private userBoxShown: boolean = false;

  constructor(private authService: AuthService) {

    authService.getCurrentAuthState().subscribe( (state) => {
        this.isAuthenticated = state ? true : false;

        if (this.isAuthenticated) {
          // this.userEmail = state.auth['providerData'][0].email;
          console.log(state.auth);
          this.userEmail = state.auth['email'];
        }

      }
    );
  }

  logout() {
    this.authService.logout();
  }

  showUserBox() {
    this.userBoxShown = !this.userBoxShown;
  }

}
