import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [ HeavyLoadersSlowComponent ],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
