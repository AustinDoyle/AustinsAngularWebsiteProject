import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // Left hand side text
  footerMainText = 'Austin Doyle™'

  // Right hand side text "{socialIntro} {linkedInIcon} {githubIcon}"
  socialIntro = 'Follow Me on Social!'

  linkedInURL = 'https://www.linkedin.com/in/doyleaustin/'
  linkedInIconClass = 'fa-linkedin fab'

  githubURL = 'https://github.com/AustinDoyle'
  githubIconClass = 'fa-github fab'
}
