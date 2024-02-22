import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ HeavyLoadersSlowComponent, TitleComponent ],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
