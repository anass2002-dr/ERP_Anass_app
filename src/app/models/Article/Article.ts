import { Familly } from "../Familly/Familly";

export class Article {
  idArticle?: number;
  articleRef: string = "";
  articleName: string = "";
  descriptionArticle: string = "";
  purchasePrice: number = 0;
  sellingPrice: number = 0;
  familyID: number = 0;
  familly: Familly = new Familly();
  stockQuantity: number = 0;
}

