import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CommonModule, TitleComponent ],
  template: `
    <app-title [title]="currentFramework()"/>

    <pre>{{ this.frameworkAsSignal() | json }}</pre>
    <pre>{{ this.frameworkAsProperty | json }}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${ this.frameworkAsSignal().name }`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    year: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    year: 2016
  };

  constructor(){
    setTimeout( () => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(
        value => ({
          ...value,
          name : 'React'
        })
      )
      console.log('Hecho')
    }, 3000);
  }

}
