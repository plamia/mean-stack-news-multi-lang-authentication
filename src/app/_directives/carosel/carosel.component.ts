import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Image } from '../../_models/image';

@Component({
    moduleId: module.id.toString(),
    selector: 'carousel',
    templateUrl: './carosel.component.html',
    styleUrls: ['./carosel.component.scss']
})

export class CSSCarouselComponent {
    public images = IMAGES;
}

let IMAGES: Image[] = [
    { "title": "We are covered", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg" },
    { "title": "Generation Gap", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg" },
    { "title": "Potter Me", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg" },
    { "title": "Pre-School Kids", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg" },
    { "title": "Young Peter Cech", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg" }
];