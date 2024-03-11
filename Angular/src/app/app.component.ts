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
anagrama(palabra1:string,palabra2:string): 
  boolean {
    if (palabra1.length == palabra2.length) {
      palabra1.split('').sort() == palabra2.split('').sort()
        return false;
    }
    else if (palabra1.length != palabra2.length) {
      return false;
    }
    return true;
}


 secuenciaFibo (num: number)
{
const fib = [0,1]

for (let i =2; i<= num ; i++)
{
  fib[i] = fib[i-1] + fib [i -2]
}
return fib
}
}
