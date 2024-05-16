import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { FormataStringPipe } from "../pipes/index";
import { NgModel} from "@angular/forms";

@Directive({ selector: "[formataString]" })
export class FormataStringDirective implements OnInit {

  private el: HTMLInputElement;
  private mask: string | undefined;

  constructor(
    private elementRef: ElementRef,
    private pipe: FormataStringPipe,
    public model: NgModel
  ) {
    this.el = this.elementRef.nativeElement;

    if(this.elementRef.nativeElement.attributes["formatastring"].value != undefined){
      this.mask = this.elementRef.nativeElement.attributes["formatastring"].value;
    }
  }
  
  ngOnInit() {
    this.el.value = this.pipe.transform(this.el.value, this.mask);
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value : any) {
    value = this.model.value
    value = this.pipe.transform(value, this.mask);
    this.model.viewToModelUpdate(value);

    if(this.model.valueAccessor !== null)
      this.model.valueAccessor.writeValue(value)
  }

  @HostListener("keyup", ["$event.target.value"])
  onKeyup(value : any) {
    value = this.model.value
    value = this.pipe.transform(value, this.mask);
    this.model.viewToModelUpdate(value);

    if(this.model.valueAccessor !== null)
      this.model.valueAccessor.writeValue(value)
  }
}