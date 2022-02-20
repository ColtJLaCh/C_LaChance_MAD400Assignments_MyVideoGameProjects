import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() textDecor?: string;
  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
      this.styleMe(true);
  }

  @HostListener('mouseleave') onMouseExit() {
    this.styleMe(false);
  }

  //I'll optomize this in the future with a switch and multiple methods if need be
  private styleMe(isHovering: boolean) {
    if (this.textDecor == "bold") {
      if (isHovering) {
        this.elm.nativeElement.style.fontWeight = this.textDecor;
      } else {
        this.elm.nativeElement.style.fontWeight = "normal";
      }
    } else {
      if (isHovering) {
        this.elm.nativeElement.style.textDecoration = this.textDecor;
      } else {
        this.elm.nativeElement.style.textDecoration = "none";
      }
    }
  }

  ngOnInit(): void {
    this.textDecor = (this.textDecor == null ? "underline" : this.textDecor);
  }

}
