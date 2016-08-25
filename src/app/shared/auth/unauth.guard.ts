import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class UnauthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.auth
      .map(authState => !authState)
      .do(unauthenticated => {
        if (!unauthenticated) {
          this.router.navigate(['/app']);
        }
      })
      .take(1);
  }
}
