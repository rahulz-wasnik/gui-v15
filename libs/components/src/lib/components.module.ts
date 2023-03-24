import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TextBoxComponent],
  exports:[TextBoxComponent]
})
export class ComponentsModule {}
