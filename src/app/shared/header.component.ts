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
        <!--<tas-loginbox *ngIf="userBoxShown && !isAuthenticated"></tas-loginbox>-->
        <div class="panel"
          *ngIf="userBoxShown && !isAuthenticated">
          <div class="panel-tabs">
            <a [ngClass]="{'is-active': !isSigningUp}" (click)="setLoginState(false)">Login</a>
            <a [ngClass]="{'is-active': isSigningUp}" (click)="setLoginState(true)">Sign Up</a>
          </div>
          <div class="panel-block">
            <div class="content">
              <tas-loginform *ngIf="!isSigningUp"></tas-loginform>
              <tas-signupform *ngIf="isSigningUp"></tas-signupform>
            </div>
          </div>
        </div>
        
        <div class="panel"
          *ngIf="userBoxShown && isAuthenticated">
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
    </nav>
  `,
  styles: [`
    .panel {
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
  private isSigningUp: boolean = false;

  constructor(private authService: AuthService) {

    // Subscribe to the auth state directly to receive live changes.
    authService.auth.subscribe( (state) => {

        this.isAuthenticated = state !== null ? true : false;

        if (this.isAuthenticated) {
          this.userEmail = state.auth['email'];
        }
      }
    );
  }

  setLoginState(bool: boolean) {
    this.isSigningUp = bool;
  }

  logout() {
    this.authService.logout();
  }

  showUserBox() {
    this.userBoxShown = !this.userBoxShown;
  }

}
