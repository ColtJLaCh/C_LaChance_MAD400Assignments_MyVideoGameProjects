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
    <p>
      <h3>${this.contentArr[index].title}</h3></br>
      ${this.contentArr[index].description}</br></br>
      <b>${this.contentArr[index].creator}</b></br></br>
      <img src=${this.contentArr[index].imgURL}></br>
      ${this.contentArr[index].type}</br>
    </p>
    `;
    console.log(this.contentArr[index].imgURL);
    return html;
  }
}
