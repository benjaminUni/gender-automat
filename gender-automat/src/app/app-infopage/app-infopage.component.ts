import { Component } from '@angular/core';

@Component({
  selector: 'app-infopage',
  templateUrl: './app-infopage.component.html',
  styleUrls: ['./app-infopage.component.css']
})
export class AppInfopageComponent {
  headline = "Willkommen beim Gender Automaten!";
  subheadline = "Dein Online-Tool, damit deine Text gender neutraler werden."
  logo = "assets/_files/logo.png";
}
