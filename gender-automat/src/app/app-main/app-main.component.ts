import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import genderdata from '../../assets/_files/genderdata.json';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent{

  @ViewChild('textInputField') textInput: ElementRef;
  inputMessage: string = "Gib hier deinen Text ein."
  resultMessage: string = "Hier wird das Ergebnis angezeigt";
  buttonText:string = "Absenden"
  resultText: string = "";
  genderList:{maskulin_word:string, neutral_version:string, article_wrong:string, article_right:string}[] = genderdata;

  private fb = inject(FormBuilder);
  textForm = this.fb.group({
    textField: [null, Validators.required],
  });

  onSubmit(): void {
    this.resultText = this.textInput.nativeElement.value;
    var genderText:string = this.compareInputText(this.textInput.nativeElement.value);
    var correctedText:string = this.correctArticleInInputText(genderText);
    this.resultText = correctedText;
  }

  compareInputText(textInput:string): string{
    this.genderList.map(gender => {
      textInput = textInput.replaceAll(gender.maskulin_word, gender.neutral_version);
      }
    );
    return textInput;
  }

  checkIfFirstLetterIsCapital(oldArticle:string, newArticle:string): string{
    var capitalizedWord = "";
    
    if(/[A-Z]/.test(oldArticle[0]))
    {
      const firstLetter = newArticle.charAt(0)
      const firstLetterCapitalized = firstLetter.toUpperCase();
      const remainingLetters = newArticle.slice(1);
      capitalizedWord = firstLetterCapitalized + remainingLetters;
    }
    else{
      capitalizedWord = newArticle;
    }
    return capitalizedWord;
  }

  correctArticleInInputText(textInput:string): string{
      var correctedText: string = "";
      const words = textInput.split(' ');
        words.map((element, index) => {
          this.genderList.map(gender => {
            if(element === gender.neutral_version)
              {
                if(index !== 0){
                  var lowerCaseForComparison:string = words[index - 1].toLowerCase();
                  if(lowerCaseForComparison == gender.article_wrong){
                    var capitalizedArticle = this.checkIfFirstLetterIsCapital(words[index - 1], gender.article_right);
                    words.splice(index - 1, 1, capitalizedArticle);
                  }
                }
              }
          }
        );
        }
      );
      correctedText = words.join(" ");
      return correctedText;
  }
}
