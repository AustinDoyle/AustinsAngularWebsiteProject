export class Blog {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public date: Date,
    public summary: string,
    public content: string,
    public contentFile: string,
    public imageUrl: string
  ) {}
}
