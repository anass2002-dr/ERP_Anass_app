import { Injectable } from '@angular/core';
import { Article } from '../../models/Article/Article';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ArticleDTO } from '../../models/Article/ArticleDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private url: string = `${environment.ApiUrl}`;


  public GetDataArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}/Home/GetArticles`);
  }
  public createArticle(article: ArticleDTO): Observable<ArticleDTO> {
    return this.http.post<ArticleDTO>(`${this.url}/Home/AddArticle`, article);
  }
}
