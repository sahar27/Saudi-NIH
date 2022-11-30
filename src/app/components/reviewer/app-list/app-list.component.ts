import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ChangeDetectionStrategy,
    ElementRef,
    AfterContentInit,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Application } from 'src/app/layout/api/application';
import { ReviewerService } from '../service/app.service';

@Component({
    selector: 'app-app-list',
    templateUrl: './app-list.component.html',
    styleUrls: ['./app-list.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppListComponent implements OnInit {
    @Input() applicationList!: Application[];

    @Input() title!: string;

    data: any = '0';

    @ViewChild('menu') menu!: Menu;

    menuItems: MenuItem[] = [];

    isFirstVisit: boolean = true;

    currentApp: Application = {
        id: 2,
        name: 'Application Subject',
        completed: false,
        category: 'AI',
    };

    @Input() isList = true;
    clickedApplication!: Application;

    constructor(
        private applicationService: ReviewerService,
        private el: ElementRef
    ) {}

    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'Edit',
                icon: 'pi pi-pencil',
                command: () => this.onEdit(),
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => this.handleDelete(),
            },
        ];
    }

    parseDate(date: Date) {
        let d = new Date(date);
        return d.toUTCString().split(' ').slice(1, 3).join(' ');
    }

    handleDelete() {
        this.applicationService.removeApplication(this.clickedApplication.id);
    }

    toggleMenu(event: Event, application: Application) {
        this.clickedApplication = application;
        this.menu.toggle(event);
    }

    onEdit() {
        this.applicationService.onApplicationSelect(this.clickedApplication);
        this.applicationService.showDialog('Edit application', false);
    }

    onCheckboxChange(event: any, application: Application) {
        event.originalEvent.stopPropagation();
        application.completed = event.checked;
        this.applicationService.markAsCompleted(application);
    }

    open(application: any) {
        this.isFirstVisit = false;
        this.currentApp = application;
        console.log(this.currentApp);
        this.applicationList.forEach((application) => {
            this.el.nativeElement
                .querySelector(`#app-${application.id}`)
                .classList.remove('selected');
        });
        this.el.nativeElement
            .querySelector(`#app-${application.id}`)
            .classList.add('selected');
    }
}
