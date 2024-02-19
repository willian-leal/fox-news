import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmallContentComponent } from './components/small-content/small-content.component';
import { BlogServiceService } from './services/blog-service.service';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyContentComponent,
    SmallContentComponent,
    MainContentComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
