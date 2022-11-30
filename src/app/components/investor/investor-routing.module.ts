import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvestorComponent } from './investor.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: InvestorComponent }]),
    ],
    exports: [RouterModule],
})
export class InvestorRoutingModule {}
