import { Content } from "./content-interface";

export class ContentList {
  private contentArr: Content[];

  constructor() {
    this.contentArr = [];
  }

  public getContentArr() {
    return this.contentArr;
  }

  public addContent(content: Content) {
    this.contentArr.push(content);
  }

  public contentArrLength() {
    return this.contentArr.length;
  }

  public getContentProperties(index: number) {
    var html = `
      ${this.contentArr[index].title}
      ${this.contentArr[index].description}
      ${this.contentArr[index].creator}
      ${this.contentArr[index].imgURL}
      ${this.contentArr[index].type}
    `;
    
    return html;
  }
}
