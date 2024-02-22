import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loaders Slow
    </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) cssClass!: string;

  constructor(){

    const start = Date.now();
    while( Date.now() - start < 3000 ){

    }

    console.log('heavy loader component');
  }

}
