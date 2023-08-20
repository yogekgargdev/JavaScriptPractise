// Sorting on Strings

var fruits = ["Banana","Grapes","Mango","Apple"];
console.log("Unsorted Fruits: "+fruits)
fruits.sort();
console.log("Sorted Fruits: " + fruits);

// Descending Order sort on Strings Array
fruits = ["Banana","Grapes","Mango","Apple"];
fruits.sort(); // This is important for descending order sort, 
// reverse() only reverses the elements of the array not do them in Descending Order
fruits.reverse();
console.log("Descending Order Fruits Sort: " +fruits)

// Sorting on Numeric Arrays

var numbers = [321,2131,12,3,1,45]
numbers.sort(function(a,b){return a-b});
console.log("AO Numbers Sort:" + numbers);

// We can also use arrow functions instead
numbers = [321,2131,12,3,1,45]
numbers.sort((a,b)=>a-b);
console.log("AO Numbers Sort:" + numbers);

// Descending Order Sort on the array
numbers = [321,2131,12,3,1,45]
numbers.sort((a,b)=>b-a);
console.log("DO Numbers Sort:" + numbers);