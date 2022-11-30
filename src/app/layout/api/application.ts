export interface Application {
    id: number;
    name?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    members?: Member[];
    completed?: boolean;
    status?: string;
    comments?: number;
    attachments?: number;
    category?: string;
}

export interface Member {
    name?: string;
    image?: string;
}

export interface DialogConfig {
    visible: boolean;
    header?: string;
    newTask?: boolean;
}
