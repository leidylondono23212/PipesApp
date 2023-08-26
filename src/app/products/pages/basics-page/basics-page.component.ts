import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'leidy';
  public nameUpper: string = 'LEIDY';
  public fullName: string = 'LeIdY lOnDoÑo';

  public customDate: Date = new Date();

}
