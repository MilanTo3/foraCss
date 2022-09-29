import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foraCss';

  ngAfterViewInit() {

    let signUpButton = document.getElementById('signUp')!;
    let signInButton = document.getElementById('signIn')!;
    let container = document.getElementById('container')!;

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

}
