import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { News } from '../_models/news';

@Injectable()
export class NewsService {
    private newsUrl = 'app/news';

    constructor(private http: Http) { }

    getNews(): Observable <News[]> {
        return this.http.get(this.newsUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
    }