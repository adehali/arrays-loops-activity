/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
console.log('Member Hobbies is:');
let memberHobbies = ['swimming', 'board games', 'painting']; 
for ( let i = 0; i < memberHobbies.length; i++){
     console.log(memberHobbies[i]);
     
}
console.log('Total number of hobbies is: ', memberHobbies.length); 

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors = ['green', 'red', 'teal', 'orange', 'teal']; 

let tealCount = 0; 

for ( color of colors){
     if (color === 'teal'){
          tealCount++
     }   
}
console.log('Colors are: ', colors); 
console.log(tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

console.log('Array Numbers, Odd-Numbers, and Even-Numbers:');

let arrayNumbers = ['3', '7', '2', '8', '11', '4', '2']
let oddNumbers = []; 
let evenNumbers = []; 
for (let i = 0; i < arrayNumbers.length; i++ ){
     if (arrayNumbers[i] % 2 === 0){
          evenNumbers.push(arrayNumbers[i]);
     }
     else {
          oddNumbers.push(arrayNumbers[i]);
     }
}

console.log('Odd Numbers:', oddNumbers);
console.log('Even Numbers:', evenNumbers);
console.log('Array Numbers:', arrayNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let booleanArray = [true, false, true, true];
let toggled = [];
for (let Oppositevalue of booleanArray){
         toggled.push(!Oppositevalue);

     }
console.log('Boolean Array:', booleanArray);
console.log('Toggled Array:', toggled);


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

let stretch = [3, 0, 2, 8, 0, 0, 0]; 
console.log('STRETCH Remove 0s:', stretch);

while (stretch.length > 0 && stretch[stretch.length -1] === 0){

     stretch.pop(0);
}
         
console.log('Removed 0s from the end:', stretch);


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */

      let largishArray = [2, 2, -3, 7, 4, 1, 7, 12, 8];
      let highNumber = [0];
      let lowNumber = [0];
      
      for (let array of largishArray ){
           if (array > highNumber){
                highNumber = array;
           }
           if (array < lowNumber) {
               
                lowNumber = array;
           }
      }
      console.log('largish array:', largishArray);
      console.log('Highes numers:', highNumber);
      console.log('Lowest Number', lowNumber);
      
// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
