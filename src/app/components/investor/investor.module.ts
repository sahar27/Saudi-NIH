import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorComponent } from './investor.component';
import { InvestorRoutingModule } from './investor-routing.module';

@NgModule({
    imports: [CommonModule, InvestorRoutingModule],
    declarations: [InvestorComponent],
})
export class InvestorModule {}
