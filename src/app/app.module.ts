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
import { IndividualBlogComponent } from './pages/blog/individual-blog/individual-blog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TestMatTabComponent } from './app-components/test-mat-tab/test-mat-tab.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeTemplateComponent } from './pages/resume/resume-template/resume-template.component';
import { ResumeChildComponent } from './pages/resume/resume-child/resume-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IntroContentComponent,
    CarouselComponent,
    FooterComponent,
    TwoColumnImageTextComponent,
    TestMatTabComponent,
    HomeComponent,
    BlogComponent,
    ResumeComponent,
    IndividualBlogComponent,
    ResumeComponent,
    ResumeTemplateComponent,
    ResumeChildComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
