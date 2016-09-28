// Place your FizzBuzz code here. 


/*Here is my example of fizzbuzz. It was at first a bit challenging 
to think about the solution but I decided to write it down in a 
pseudo fashion to grasp the oncept a bit more. After which I had several \
options that I could see that I would go with. A "do/while" or "else/if" statement
seems to be the best choice. I tried the else/if first and stuck with that. 
I then started adding variables to represent operations within the function. It was me 
just having a bit of fun with variables. I am used to regular Java language 
where the "function" is the method or construct but I noticed the 
simularities in how these are constructed and used. 


*/

function fizzBuzz() { // function named appropriately 
  var f, b, d5, d3, cs, n
  for (var i = 1; i < 21; i++) { // default increment loop 
    d3 = (i % 3 == 0) // increment number divide by 3 with no remainder = true 
    d5 = (i % 5 == 0)
    f = "Fizz!";
    b = "Buzz!";
    n = "<br/>"

    if (d5 && d3) { // start with evaluating both conditions first otherwise there will be an issue with your results 

      document.write(f, b + n);
      console.log(f, b);
    } else if (d3) { // check condition is true 
      document.write(f + n);
      console.log(f);
    } else if (d5) { // check conition is true
      document.write(b + n);
      console.log(b);
    } else { // all false then log the increment number
      document.write(i + n);
      console.log(i);
    }
  }
}
fizzBuzz(); // call the function to be run