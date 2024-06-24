import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article/Article';
import { ArticleDTO } from 'src/app/models/Article/ArticleDTO';
import { ProductService } from 'src/app/Services/Articles/product.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  @Input() article?: Article;
  articleForm: FormGroup;
  showAlert: boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.articleForm = this.fb.group({
      ArticleRef: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,10}$')]], // Alphanumeric, 3-10 characters
      ArticleName: ['', Validators.required],
      idFamily: ['', Validators.required],
      DescriptionArticle: ['', Validators.required],
      PurchasePrice: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]], // Decimal number
      SellingPrice: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]]  // Decimal number
    });
  }

  ngOnInit(): void {
    this.productService.GetDataArticle().subscribe(data => {
      console.log(data);
      // Assuming data is an array of articles, you can handle the data as needed
    }, error => {
      console.error('Error fetching data', error);
    });
  }

  onSubmit(): void {
    if (this.articleForm.valid) {
      const newArticle: any = this.articleForm.value;
      console.log('====================================');
      console.log(newArticle);
      console.log('====================================');

      this.productService.createArticle(newArticle).subscribe(response => {
        console.log('Article created successfully', response);
        this.showAlert = false; // Hide the alert if the form is valid
      }, error => {
        console.error('Error creating article', error);
        this.showAlert = true; // Show the alert if there was an error
      });
    } else {
      console.log('Form not valid');
      this.showAlert = true; // Show the alert if the form is not valid
    }
  }
}
