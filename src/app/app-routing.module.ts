import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
};

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                data: { breadcrumb: 'Admin Dashboard' },
                loadChildren: () =>
                    import(
                        './components/admin/admin.module'
                    ).then((m) => m.AdminModule),
            },
            {
                path: 'applicant',
                data: { breadcrumb: 'Applicant' },
                loadChildren: () =>
                    import('./components/applicant/applicant.module').then(
                        (m) => m.ApplicantModule
                    ),
            },
            {
                path: 'reviewer',
                data: { breadcrumb: 'Reviewer' },
                loadChildren: () =>
                    import('./components/reviewer/reviewer.app.module').then(
                        (m) => m.ReviewerModule
                    ),
            },
            {
                path: 'investor',
                data: { breadcrumb: 'Investor' },
                loadChildren: () =>
                    import('./components/investor/investor.module').then(
                        (m) => m.InvestorModule
                    ),
            }
        ],
    },

    {
        path: 'landing',
        loadChildren: () =>
            import('./components/landing/landing.module').then(
                (m) => m.LandingModule
            ),
    },
    {
        path: 'notfound',
        loadChildren: () =>
            import('./components/notfound/notfound.module').then(
                (m) => m.NotfoundModule
            ),
    },
    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
