//question 1

// const array = [1,2,3,4,5,6];

// array.map((number)=>console.log(number*number)
// );




//question 2

// let score = 61;

// let result = (score > 90) ? "A" :
//              (score > 80) ? "B" :
//              (score > 70) ? "C" :
//              (score > 60) ? "D" : "F";

// console.log(result);




//question 3

// let carDetails = {
//     company : "BMW",
//     model : " BMW M4 Coupe G82 (2nd Gen)",
//     year : 2020
// }

// function updateYear(carDetails, newYear) {
//     carDetails.year = newYear
// }

// updateYear(carDetails,2022)

// const {model, year} = carDetails

// console.log(`CAR MODEL: ${model}, YEAR: ${year}`);




//question 4

// const numbers = [2,4,5,6,7,10,11,12,13,14];

// function isPrime(num) {
//     if (num <= 1) return false; 
//     if (num === 2) return true; 
  

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false; 
//       }
//     }
  
//     return true; 
//   }
  
//   const primeNumbers = numbers.filter(isPrime);
  
//   console.log(primeNumbers);



  
  //question 5

 /*  map: Transform each element in an array e.g., squaring numbers
     filter: Select elements that satisfy a condition (e.g., get even numbers
     reduce: Accumulate a single value from an array (e.g., summing numbers */



     
  //question 6

  // async function getValue() {
  //   try {
  //     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const jsonData = await data.json();
  //   console.log(jsonData);
  //   return jsonData; 
  //   } catch (error) {
  //     console.log("handled");
  //     return {};
  //   }
  // }

  // getValue();



   //question 7

   const person = {
    name: "Subhin V S",
    address: {
      place: "nileshwar",
      city: "kasaragod",
      zip: "671314"
    },
    contact: {
      phone: 9123456789
    }
   };

   const phoneNumber = person.contact?.phone;

   if (phoneNumber) {
      console.log(`Phone Number: ${phoneNumber}`);
      
   } else {
    console.log("Phone Number Not Available");
    
   };
  



  






