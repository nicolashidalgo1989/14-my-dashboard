import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transitions 2" />
    <section class="flex justify-end" style="justify-content: end">
      <img srcset="https://picsum.photos/id/121/200/300.jpg" alt="Picsum" width="200" height="300" style="view-transition-name: hero1;" />
      <div class="bg-blue-800 w-64 h-64"  style="view-transition-name: hero2;" ></div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
