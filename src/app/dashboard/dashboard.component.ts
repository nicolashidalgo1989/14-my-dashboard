import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, SidemenuComponent ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
