import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { TwoColumnImageTextComponent } from './app-components/two-column-image-text/two-column-image-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './app-components/carousel/carousel.component';
import { IntroContentComponent } from './app-components/intro-content/intro-content.component';
import { ToolbarComponent } from './app-components/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TestMatTabComponent } from './test-mat-tab/test-mat-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IntroContentComponent,
    CarouselComponent,
    FooterComponent,
    TwoColumnImageTextComponent,
    HomeComponent,
    BlogComponent,
    ResumeComponent,
    TestMatTabComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
