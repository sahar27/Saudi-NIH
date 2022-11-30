import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicantComponent } from './applicant.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ApplicantComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ApplicantRoutingModule {}
