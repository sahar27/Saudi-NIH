import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogConfig, Application } from 'src/app/layout/api/application';

@Injectable()
export class ReviewerService {
    dialogConfig: DialogConfig = {
        visible: false,
        header: '',
        newTask: false,
    };

    application: Application[] = [];

    private applicationSource = new BehaviorSubject<Application[]>(
        this.application
    );

    private selectedApplication = new Subject<Application>();

    private dialogSource = new BehaviorSubject<DialogConfig>(this.dialogConfig);

    applicationSource$ = this.applicationSource.asObservable();

    selectedApplication$ = this.selectedApplication.asObservable();

    dialogSource$ = this.dialogSource.asObservable();

    constructor(private http: HttpClient) {
        this.http
            .get<any>('assets/demo/data/application.json')
            .toPromise()
            .then((res) => res.data as Application[])
            .then((data) => {
                this.application = data;
                this.applicationSource.next(data);
            });
    }

    addTask(application: Application) {
        if (this.application.includes(application)) {
            this.application = this.application.map((t) =>
                t.id === application.id ? application : t
            );
        } else {
            this.application = [...this.application, application];
        }

        this.applicationSource.next(this.application);
    }

    removeApplication(id: number) {
        this.application = this.application.filter((t) => t.id !== id);
        this.applicationSource.next(this.application);
    }

    onApplicationSelect(application: Application) {
        this.selectedApplication.next(application);
    }

    markAsCompleted(application: Application) {
        this.application = this.application.map((t) =>
            t.id === application.id ? application : t
        );
        this.applicationSource.next(this.application);
    }

    showDialog(header: string, newTask: boolean) {
        this.dialogConfig = {
            visible: true,
            header: header,
            newTask: newTask,
        };

        this.dialogSource.next(this.dialogConfig);
    }

    closeDialog() {
        this.dialogConfig = {
            visible: false,
        };

        this.dialogSource.next(this.dialogConfig);
    }
}
