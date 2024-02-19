import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';
@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  
  public showContent = signal(false);
  public grade = signal<Grade>('F');

  public toggleContent() {
    this.showContent.update( value => !value )
  }

}
