import { RouterModule, Routes } from "@angular/router";
import { UserHomeComponent } from "./user-home/user-home.component";
import { HomeComponent } from "./shared/home.component";
import { AuthGuard } from "./shared/auth/auth.guard";
import { UnauthGuard } from "./shared/auth/unauth.guard";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [UnauthGuard] },
    { path: 'app', component: UserHomeComponent, canActivate: [AuthGuard] }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
