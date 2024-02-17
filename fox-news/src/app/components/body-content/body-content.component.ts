import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.scss']
})
export class BodyContentComponent implements OnInit {

  posts: any[] = [];
  mainPost: any; // mainPost é um único objeto, não um array

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.blogService.getSmallPosts().subscribe((data: any) => {
      this.posts = data.articles;
      // Remove o primeiro post, que é o mainPost
      this.posts.shift();
    });

    this.blogService.getMainPost().subscribe((data: any) => {
      this.mainPost = data.articles[0]; // Supondo que a API retorna um objeto dentro de um array
    });
  }

}
