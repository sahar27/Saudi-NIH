import { Component, OnDestroy } from '@angular/core';
import { Application } from 'src/app/layout/api/application'
import { ReviewerService } from './service/app.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './reviewer.app.component.html'
})
export class ReviewerComponent implements OnDestroy {

    subscription: Subscription;

    todo: Application[] = [];

    completed: Application[] = [];

    constructor(private applicationService: ReviewerService) {
        this.subscription = this.applicationService.applicationSource$.subscribe(data => this.categorize(data));
    
    }

    categorize(applications: Application[]) {
        this.todo = applications.filter(t => t.completed !== true);
        this.completed = applications.filter(t => t.completed);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showDialog() {
        this.applicationService.showDialog('Create application', true);
    }
}