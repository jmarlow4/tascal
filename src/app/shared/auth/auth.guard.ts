import { Injectable } from "@angular/core";
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.auth.map((auth) => {
      if (auth !== null) {
        return true
      }
      this.router.navigateByUrl('/');
      return false;
    }).take(1);
  }
}
