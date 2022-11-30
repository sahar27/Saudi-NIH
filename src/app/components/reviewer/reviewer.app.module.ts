import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewerRoutingModule } from './app-list.app-routing.module';
import { ReviewerComponent } from './reviewer.app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { AppListComponent } from './app-list/app-list.component';
import { ReviewerService } from './service/app.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReviewerRoutingModule,
        ButtonModule,
        InputTextModule,
        EditorModule,
        CalendarModule,
        ToastModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        CheckboxModule,
        MenuModule,
        DialogModule,
    ],
    declarations: [ReviewerComponent, AppListComponent],
    providers: [ReviewerService],
})
export class ReviewerModule {}
