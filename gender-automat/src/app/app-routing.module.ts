import { AppInfopageComponent } from './app-infopage/app-infopage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './app-pagenotfound/pagenotfound.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppDsgvoComponent } from './app-dsgvo/app-dsgvo.component';


const routes: Routes = [
  { path: 'info', component: AppInfopageComponent },
  { path: '', component: AppNavComponent },
  { path: 'dsgvo', component: AppDsgvoComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
