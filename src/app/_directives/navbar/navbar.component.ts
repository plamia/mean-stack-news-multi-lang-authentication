import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '../../translate/index';
import { AuthenticationService } from "../../_services/authentication.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private selected: boolean = true;
    public supportedLangs: any;
    public selectedOptionValue: string;

    constructor(private router: Router, private zone: NgZone, private authenticationService: AuthenticationService, private translate: TranslateService) {}

    ngOnInit() {
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: 'Français', value: 'fr' },
        ];

        this.selectLang('en');
        this.selectedOptionValue = 'en';
    }

    clickNews(): void {
            this.zone.run(() => {
                this.router.navigate(['news']);
            });
    }

    select(event) {
        event.preventDefault();
        this.selected = !this.selected;
    }

    goToHome(): void {
        if (this.router.url !== '') {
            this.zone.run(() => {
                this.router.navigate(['']);
            });
        }
    }

   isCurrentLang(lang: string) {
        return lang === this.translate.currentLang;
    }

    selectLang(lang: string) {
        this.translate.use(lang);
    }

    get newsNavBarText(): string {
        return this.translate.instant('news');
    }

    get logoutNavBarText(): string {
        return this.translate.instant('logout');
    }

    get homeNavBarText(): string {
        return this.translate.instant('home');
    }
}
