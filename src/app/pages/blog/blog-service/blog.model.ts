export class Blog {
    constructor(
        public id: number,
        public title: string,
        public summary: string,
        public content: string,
        public contentFile: string,
    ) { }
}