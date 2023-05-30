import { AppLandingpageComponent } from './app-landingpage/app-landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './app-pagenotfound/pagenotfound.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppDsgvoComponent } from './app-dsgvo/app-dsgvo.component';


const routes: Routes = [
  { path: '', component: AppLandingpageComponent },
  { path: 'main', component: AppNavComponent },
  { path: 'dsgvo', component: AppDsgvoComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
