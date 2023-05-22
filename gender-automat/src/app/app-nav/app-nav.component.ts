import { Component, inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {

  logo = "assets/_files/logo.png";
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    swapSides:boolean = false;
    swapIcon:boolean = false;
    positionSwap:boolean = false;

    doSwapSides():void{
      this.swapSides = !this.swapSides;
      this.swapIcon = !this.swapIcon;
      this.positionSwap = !this.positionSwap;
    }
}
