import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { TranslateService } from '../translate/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    public currentUser: User;
    public users: User[] = [];
    public supportedLangs: any;

    constructor(private userService: UserService, private translate: TranslateService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    get welcomeText(): string {
        return this.translate.instant('welcome');
    }

    get userNameText(): string {
        return this.translate.instant('username');
    }

    get firstNameText(): string {
        return this.translate.instant('firstname');
    }

    get lastNameText(): string {
        return this.translate.instant('lastname');
    }

    get deleteBtnText(): string {
        return this.translate.instant('delete');
    }

}