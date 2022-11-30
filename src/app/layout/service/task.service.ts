import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DialogConfig, Application } from '../api/application';

@Injectable()
export class applicationService {
    dialogConfig: DialogConfig = {
        visible: false,
        header: '',
        newTask: false,
    };

    application: Application[] = [];

    private applicationSource = new BehaviorSubject<Application[]>(
        this.application
    );

    private applicationTask = new Subject<Application>();

    private dialogSource = new BehaviorSubject<DialogConfig>(this.dialogConfig);

    applicationSource$ = this.applicationSource.asObservable();

    applicationTask$ = this.applicationTask.asObservable();

    dialogSSource$ = this.dialogSource.asObservable();

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

    addTask(task: Application) {
        if (this.application.includes(task)) {
            this.application = this.application.map((t) =>
                t.id === task.id ? task : t
            );
        } else {
            this.application = [...this.application, task];
        }

        this.applicationSource.next(this.application);
    }

    removeTask(id: number) {
        this.application = this.application.filter((t) => t.id !== id);
        this.applicationSource.next(this.application);
    }

    onApplicationSelect(application: Application) {
        this.applicationTask.next(application);
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
