
// Q39. City Names: Write a function called city_country() that takes in the name 
// of a city and its country. The function should return a string formatted like this:

 // "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.



// Creating a function with prameters which return a values in string

function city_country(city: string, country: string) :string{
        return `${city} , ${country}`;
}

// Calling  a function and print the reuturn value

console.log(city_country("Karchi", "Pakistan"));


console.log(city_country("Tokyo", " Japan"));
    
console.log(city_country("Berlin", "Germany"));