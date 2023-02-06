import { HeaderComponent } from './core/components/header/header.component';
import { ArticleComponent } from './features/articles/components/article/article.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArticlesModule } from "./features/articles/articles.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from './shared/shared.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        FormsModule,
        ArticlesModule,
        CoreModule,
        SharedModule
    ]
})
export class AppModule { }
