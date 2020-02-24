import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  // { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  // {
  //   path: 'members',
  //   canActivate: [AuthGuardService],
  //   loadChildren: './members/member-routing.module#MemberRoutingModule'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
