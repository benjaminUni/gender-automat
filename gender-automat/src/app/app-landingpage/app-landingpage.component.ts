import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './app-landingpage.component.html',
  styleUrls: ['./app-landingpage.component.css']
})
export class AppLandingpageComponent {
  headline = "Willkommen beim Gender Automaten!";
  subheadline = "Dein Online-Tool, damit deine Text gender neutraler werden."
  logo = "assets/_files/logo.png";
}
