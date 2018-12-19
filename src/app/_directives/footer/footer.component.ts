import { Component } from "@angular/core";
import { TranslateService } from '../../translate/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(private translate: TranslateService) {};

    get copyRightText(): string {
        return this.translate.instant('copyright');
    }

    get allRightReservedText(): string {
        return this.translate.instant('allRightReserved');
    }
}
