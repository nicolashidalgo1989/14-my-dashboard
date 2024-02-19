import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sidemenu',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {
  
  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes(':'));

  constructor(){

    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':'))

    console.log(this.menuItems);
    

  } 

}
