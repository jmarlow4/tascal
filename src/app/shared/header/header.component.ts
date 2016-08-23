import { Component, ViewChild } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'tas-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  host: {
    '(document:click)': 'onClickOutsideUserBox($event)',
  }
})
export class HeaderComponent {

  private isAuthenticated: boolean;
  private userEmail: string;
  private userBoxShown: boolean = false;
  private isSigningUp: boolean = false;
  @ViewChild('userBox') userBox;
  @ViewChild('userBoxButton') userBoxButton;

  constructor(private authService: AuthService) {

    // Subscribe to the auth state directly to receive live changes.
    authService.auth.subscribe( (state) => {

      this.isAuthenticated = state !== null ? true : false;

      if (this.isAuthenticated) {
        this.userEmail = state.auth['email'];
      }
    });

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

  onClickOutsideUserBox(event) {
    if (this.userBoxShown
      && !this.userBox.nativeElement.contains(event.target)
      && !this.userBoxButton.nativeElement.contains(event.target))
      this.userBoxShown = false;
  }

}
