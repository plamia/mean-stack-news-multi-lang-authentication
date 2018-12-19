import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// used to translate components
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from "ng2-translate";
import { TRANSLATION_PROVIDERS, TranslateService } from './translate';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// App Component and routing
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

// all Directives(sub components)
import { NavbarComponent } from './_directives/navbar/index';
import { FooterComponent } from './_directives/footer/index';
import { Modal } from './_directives/modal/index';
import { CSSCarouselComponent } from './_directives/carosel/index';
import { AlertComponent } from './_directives/alert/index';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthGuard } from './_guards/index';

//all Services
import { AlertService, AuthenticationService, UserService, NewsService, DataNewsService } from './_services/index';

// All pages
import { HomeComponent } from './home/index';
import { NewsComponent } from './news/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot(),
        routing,
        InMemoryWebApiModule.forRoot(DataNewsService, { delay: 600 })
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        NewsComponent,
        LoginComponent,
        RegisterComponent,
        Modal,
        CSSCarouselComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        NewsService,
        DataNewsService,
        TRANSLATION_PROVIDERS,
        TranslateService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    exports: [
        TranslateModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }