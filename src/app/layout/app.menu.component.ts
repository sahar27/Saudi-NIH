import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                // label: 'Dashboards',
                // icon: 'pi pi-home',
                items: [
                    {
                        label: 'Admin Dashboard',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/'],
                    },
                    {
                        label: 'Applicant',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/applicant'],
                    },
                    {
                        label: 'Reviewer',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/reviewer'],
                    },
                    {
                        label: 'Investor',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/investor'],
                    },
                ],
            },
        ];
    }
}
