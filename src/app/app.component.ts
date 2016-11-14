import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
foods: any[] = [
  {name: 'Pizza', rating: 'Excellent'},
  {name: 'Burritos', rating: 'Great'},
  {name: 'French fries', rating: 'Pretty good'},
];
}
