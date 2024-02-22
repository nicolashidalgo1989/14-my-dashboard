import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transitions 1" />
    <section class="flex justify-start"s>
      <img srcset="https://picsum.photos/id/121/200/300.jpg" alt="Picsum" width="200" height="300" style="view-transition-name: hero1;" />
      <div class="bg-blue-500 w-64 h-52" style="view-transition-name: hero2;" ></div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
