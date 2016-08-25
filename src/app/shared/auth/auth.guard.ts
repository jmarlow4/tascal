import { Injectable } from "@angular/core";
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('auth guard called!', this.authService.state);

    // return this.authService.auth
    //   .take(1)
    //   .map(authState => !!authState)
    //   .do(unauthenticated => {
    //     if (!unauthenticated) {
    //       this.router.navigate(['/']);
    //       return false;
    //     }
    //     return true;
    //   });

    // return this.authService.auth.map((auth) => {
    //   if (!!auth) {
    //     console.log('authenticated');
    //     return true;
    //   } else {
    //     console.log('not authenticated');
    //     this.router.navigateByUrl('/');
    //     return false;
    //   }
    // }).take(1);

    if (this.authService.state !== null) {
      return true;
    }
    else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
