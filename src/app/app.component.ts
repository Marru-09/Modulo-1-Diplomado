import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virtual-lesz';
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'HOME',
                
            },
            {
              label: 'PRODUCTS',
              routerLink: '/products',
            },
            {
              label: 'WORK WITH US',
            },
            {
                label: 'ABOUT',

            },
        ];
    }
  }
