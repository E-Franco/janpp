import { NgModule } from "@angular/core";
import { FormataStringDirective } from "../diretivas";
import { FormataStringPipe } from "../pipes";

@NgModule({
  declarations: [
    FormataStringDirective,
    FormataStringPipe
  ],
  exports: [
    FormataStringDirective
  ],
  providers: [FormataStringPipe]
})
export class FormataStringModule { }