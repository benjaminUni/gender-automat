import { Component } from '@angular/core';

@Component({
  selector: 'app-examples-gridlayout',
  templateUrl: './app-examples-gridlayout.component.html',
  styleUrls: ['./app-examples-gridlayout.component.css'],
})
export class AppExamplesGridlayoutComponent {
  optionFirst: string = "Sichtbarmachen von Männern und Frauen"
  exampleFirst: string =  "Ein Student lernt dabei, wissenschaftliche Ergebnisse überzeugend darzustellen."
  exampleFirstCorrected: string =  "Ein/e Student/in lernt dabei, wissenschaftliche Ergebnisse überzeugend darzustellen."

  optionSecond: string = "Explizite Benennung von Frauen"
  exampleSecond: string =  "Der Wissenschaftler präsentiert seine Ergebnisse."
  exampleSecondCorrected: string =  "Die Wissenschaftlerin präsentiert ihre Ergebnisse."

  optionThird: string = "Ansprache aller Geschlechter"
  exampleThird: string =  "Der Verfasser des Buches ist unbekannt. "
  exampleThirdCorrected: string =  "Es ist nicht bekannt, wer das Werk verfasst hat."
}
