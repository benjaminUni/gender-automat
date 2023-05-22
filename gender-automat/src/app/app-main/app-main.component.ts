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
      this.genderList.map(gender => {
        words.map(element => {
          if(element === gender.neutral_version)
            {
              var index = words.indexOf(element);
              if(index !== 0){
                var lowerCaseForComparison:string = words[index - 1].toLowerCase();
                if(lowerCaseForComparison == gender.article_wrong){
                  words[index - 1] = this.checkIfFirstLetterIsCapital(words[index - 1], gender.article_right);
                }
              }
            }
          }
        );
        textInput = textInput.replaceAll(gender.maskulin_word, gender.neutral_version);
        }
      );
      correctedText = words.join(" ");
      return correctedText;
  }
}
