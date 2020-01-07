import { Speaker } from 'app/speakers/speaker.model';

export class XkeSession {
    id: number;
    speaker: Speaker;
    title: string;
    description: string;
    date: Date;
    constructor(id: number,
        sessionTitle: string,
        sessionDescription: string,
        sessionDate: Date) {
            this.id = id;
            this.title = sessionTitle;
            this.description = sessionDescription;
            this.date = sessionDate;
        }

}
