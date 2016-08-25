import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'tas-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  host: {
    '(document:click)': 'onClickOutsideUserBox($event)',
  }
})
export class HeaderComponent implements OnInit{

  private isAuthenticated: boolean;
  private userBoxShown: boolean = false;
  private isSigningUp: boolean = false;
  @ViewChild('userBox') userBox;
  @ViewChild('userBoxButton') userBoxButton;
  private userEmail: string;
  private authenticated: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.auth.subscribe( (authState) => {

      this.authenticated = !!authState;

      if (!!authState) {
        console.log(authState.auth['email']);
        this.userEmail = authState.auth['email'];
      }
    });

  }

  setLoginState(bool: boolean) {
    this.isSigningUp = bool;
  }

  logout() {
    this.authenticated = false;
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

  setLoggedInState(authState) {
    this.authenticated = true;
  }

}
