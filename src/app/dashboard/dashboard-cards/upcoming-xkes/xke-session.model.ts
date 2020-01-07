export class XkeSession {
    id: number;
    authorName: string;
    sessionTitle: string;
    sessionDescription: string;
    sessionDate: Date;
    constructor(id: number,
        authorName: string,
        sessionTitle: string,
        sessionDescription: string,
        sessionDate: Date) {
            this.id = id;
            this.authorName = authorName;
            this.sessionTitle = sessionTitle;
            this.sessionDescription = sessionDescription;
            this.sessionDate = sessionDate;
        }

}
