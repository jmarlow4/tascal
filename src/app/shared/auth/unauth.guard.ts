import { Injectable } from "@angular/core";
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class UnauthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('unauth guard called!', this.authService.authState);
    if (this.authService.authState === null) {
      return true;
    }
    else {
      this.router.navigateByUrl('/app');
      return false;
    }
  }
}
