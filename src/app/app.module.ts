import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IntroContentComponent } from './intro-content/intro-content.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { TwoColumnImageTextComponent } from './two-column-image-text/two-column-image-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ToolbarComponent,
    IntroContentComponent,
    CarouselComponent,
    FooterComponent,
    TwoColumnImageTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
