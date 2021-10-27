import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { OfferComponent } from './components/about/offer/offer.component';
import { EducationComponent } from './components/about/education/education.component';
import { IconStackComponent } from './components/work/icon-stack/icon-stack.component';
import { OtherStuffComponent } from './components/work/other-stuff/other-stuff.component';
import { WorkTimelineComponent } from './components/work/work-timeline/work-timeline.component';
import { ExperienceComponent } from './components/work/experience/experience.component';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { WorkFormComponent } from './components/work-form/work-form.component';
import { UserDetailsService } from './services/user-details.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    FooterComponent,
    OfferComponent,
    EducationComponent,
    IconStackComponent,
    OtherStuffComponent,
    WorkTimelineComponent,
    ExperienceComponent,
    AboutFormComponent,
    WorkFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
