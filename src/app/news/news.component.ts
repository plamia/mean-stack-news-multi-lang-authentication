import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { News } from '../_models/news';
import { NewsService } from '../_services/news.service';
import { TranslateService } from '../translate/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'news.component.html'
})

export class NewsComponent implements OnInit {
    private selectedNews: News;
    private allNews = [];
    constructor(private router: Router, private newsService: NewsService, private translate: TranslateService) {}

    ngOnInit() {
            this.newsService.getNews()
                .subscribe(data => {
                    this.allNews = data;
                    this.allNews.sort(this.sortByDate);
            });
    }

    ngAfterViewInit() {}

    onSelect(news: News): void {
        this.selectedNews = news;
    }

    sortByDate(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    get cancelBtnText(): string {
        return this.translate.instant('cancelBtn');
    }
    get newsTitleText(): string {
        return this.translate.instant('newsTitle');
    }

}