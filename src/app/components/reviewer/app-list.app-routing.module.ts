import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReviewerComponent } from './reviewer.app.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ReviewerComponent }
    ])],
    exports: [RouterModule]
})
export class ReviewerRoutingModule { }
