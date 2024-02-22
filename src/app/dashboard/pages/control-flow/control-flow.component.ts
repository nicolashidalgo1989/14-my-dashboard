import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'F';
@Component({
  standalone: true,
  imports: [ TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('F');
  public frameworks = signal(['Angular','Vue','React','Svelte','Qwik']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update( value => !value )
  }

}
