import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
  dev1: Developer = {
    lastName: 'Doe',
    firstName: 'John',
    age: 25,
    gender: 'male',
    bio: 'John is a software developer with a passion for Angular.',
    skills: [
      {
        name: 'Angular',
        logo: 'angular.png',
        site: 'https://angular.io/',
      },
      {
        name: 'TypeScript',
        logo: 'typescript.png',
        site: 'https://www.typescriptlang.org/',
      },
      {
        name: 'RxJS',
        logo: 'rxjs.png',
        site: 'https://rxjs-dev.firebaseapp.com/',
      },
    ],
  };

  dev2: Developer = {
    lastName: 'Smith',
    firstName: 'Jane',
    age: 30,
    gender: 'female',
    bio: 'Jane is a software developer with a passion for React.',
    skills: [
      {
        name: 'React',
        logo: 'react.png',
        site: 'https://reactjs.org/',
      },
      {
        name: 'JavaScript',
        logo: 'javascript.png',
        site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'HTML',
        logo: 'html.png',
        site: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'CSS',
        logo: 'css.png',
        site: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
    ],
  };
  developers = [this.dev1, this.dev2];
}
