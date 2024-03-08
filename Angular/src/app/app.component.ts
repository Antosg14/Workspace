import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  
fizz (input: number) {
  if (input > 0 && input >=100 && (input % 3) == 0 ){
   return("fizz");
  } 

 if (input > 0 && input <=100 && (input % 5) == 0 ) {
   return("buzz"); 
  } 

 if (input > 0 && input <=100 && (input % 3) == 0 &&  (input % 5) == 0 )
  {
    return("fizzbuzz");
  }

else {
  ("numero equivocado");
}

return("fin");
}

}

