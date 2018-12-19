import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '../translate/index';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public model: any = {};
    public loading = false;
    public returnUrl: string;
    public supportedLangs: any;
    public selectedOptionValue: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private translate: TranslateService) { }

    ngOnInit() {
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: 'Français', value: 'fr' },
        ];

        this.selectLang('en');
        this.selectedOptionValue = 'en';

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    isCurrentLang(lang: string) {
        return lang === this.translate.currentLang;
    }

    selectLang(lang: string) {
        this.translate.use(lang);
    }

    get titleText(): string {
        return this.translate.instant('login');
    }

    get userNameText(): string {
        return this.translate.instant('username');
    }
    get userNameRequiredText(): string {
        return this.translate.instant('usernameRequired');
    }

    get passwordText(): string {
        return this.translate.instant('password');
    }
    get passwordRequiredText(): string {
        return this.translate.instant('passwordRequired');
    }

    get loginBtnText(): string {
        return this.translate.instant('login');
    }

    get registerBtnText(): string {
        return this.translate.instant('registerBtn');
    }
}
