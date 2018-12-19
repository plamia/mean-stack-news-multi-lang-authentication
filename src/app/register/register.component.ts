import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../translate/index';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private translate: TranslateService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    get titleText(): string {
        return this.translate.instant('registration');
    }

    get firstNameText(): string {
        return this.translate.instant('firstname');
    }
    get firstnameRequiredText(): string {
        return this.translate.instant('firstnameRequired');
    }

    get lastNameText(): string {
        return this.translate.instant('lastname');
    }
    get lastNameRequiredText(): string {
        return this.translate.instant('lastnameRequired');
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

    get cancelBtnText(): string {
        return this.translate.instant('cancelBtn');
    }
    get registerBtnText(): string {
        return this.translate.instant('registerBtn');
    }

}
