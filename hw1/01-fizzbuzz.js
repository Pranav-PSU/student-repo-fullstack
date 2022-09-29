const fizzbuzz = (number) => {
  
    for (let i = 1; i <= number; i++) {
      let response = "";
      if (i % 3 === 0) 
      response += "fizz"
      if (i % 5 === 0) 
      response += "buzz"
      if (response === "") 
      response = i;
      console.log(response);
    }
};

fizzbuzz(100);
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...
