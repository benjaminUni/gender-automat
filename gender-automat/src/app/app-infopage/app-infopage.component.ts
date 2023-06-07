import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-infopage',
  templateUrl: './app-infopage.component.html',
  styleUrls: ['./app-infopage.component.css']
})
export class AppInfopageComponent {
  headline = "Willkommen beim Gender Automaten!";
  subheadline = "Dein Online-Tool, damit deine Text gender neutraler werden."
  howToHeadline = "Im unteren Bereich werden Dir verschiedene Beispiele angezeigt, wie man gendern kann. Der Gender Automat spricht dabei alle Geschlechter an, in dem er die Text mit einem Genderstern versieht.";
  logo = "assets/_files/logo.png";
}
