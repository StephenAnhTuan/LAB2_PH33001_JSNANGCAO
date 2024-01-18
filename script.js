

const weekdays= ['mon','tue','wed','thu','fri','sat',
'sun'];
const openingHours = {

    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    names: 'Classico Italia',
    location: '23 Phu Dien, 46 Xuan Phuong',
    categories: ['Italian', 'Pzzeria', 'Vegetarian', 
    'Oganic'],
    starterMenu: ['Pocaccia','Bruschetta',
    'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // openingHours: openingHours,
    openingHours,

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], 
        this.mainMenu[mainIndex]];
    },

    oderDelivery({starterIndex = 1, mainIndex = 0, 
        time = '20:00', address}) {
        console.log(
            `Oder received! ${this.starterMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]} 
            will be delivered to ${address} at ${time}`
            );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delecious Pasta with 
        ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza(mainIngrediant, ...otherIngrediant){
        console.log(mainIngrediant);
        console.log(otherIngrediant);
    }

};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 15. String







//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 14. Summary: Which data structure to use?









//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 13. Maps: Fundamentals

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
// .set('categories',['Italian', 'Pzzeria', 'Vegetarian', 
// 'Oganic'])
// .set('open',11)
// .set('close',23)
// .set(true, 'We are open :D')
// .set(false, 'We are close :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get
// ('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear()
// const arr = [1,2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'),'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));
// //Maps: Iteration
// const question = new Map([
//     ['question','What is the best programing language in the world?'],
//     [1,'C'],
//     [2,'Jav'],
//     [3,'JavaScript'],
//     ['correct',3],
//     [true,'Correct 🎉🎉'],
//     [false,'Try again'],
// ])
// console.log(question);
// //convert Object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for(const [key, value] of question ){
//     if (typeof key === 'number') 
//     console.log(`Ansewr ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);



// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 12. Sets

// const orderSet = new Set(['Pasta',
//     'Pizza', 
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza'
// ]);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto')
// // orderSet.clear()
// console.log(orderSet);
// for(const order of orderSet) console.log(order);

// //Ex
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager',
// 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager',
// 'Chef', 'Waiter']).size
// );
// console.log(new Set('jonasschetman').size);




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 11. Looping object: object keys, values. And entries

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for(const day of properties){
//     openStr += `${day},`
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);
// // Entries Object
//  const entries = Object.entries(openingHours)
// console.log(entries);

// //key,value
// for(const [key, {open, close}] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // 10. Optional chaining (.?)

// if(restaurant.openingHours && 
//     restaurant.openingHours.mon) 
// console.log(restaurant.openingHours.mon.open);
// //WITH optional chaining
// // console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon','tue','wed','thu','fri','sat',
// 'sun'];
// for(const day of days){
//     const open = restaurant.openingHours[day]?.open ??
//     'close'
//     console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');
// // Arrays
// const users = [
//     {name: 'Jonas', email: 'hello@joans.jo'}];
//     // const users = [
//     //     ];

// console.log(users[0]?.name ?? 'User array emty');
// if(users.length >0 ) console.log(users[0].name); else
// console.log('User array emty');



// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // 9. Enhanced object literals

// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // 8. Looping Arrays: The for-of loop

// const menu = [...restaurant.starterMenu, 
//     ...restaurant.mainMenu];

// for(const item of menu)
// console.log(item);

// for(const [i, el] of menu.entries()){
//     console.log(`${i + 1}: ${el }`);
// }
// console.log(...menu.entries());


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 7. Logical assigment operators

// const rest1 = {
//     name: 'Capri',
//     numGuests: 0,
// };
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi'
// };
// //OR
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10
// // rest2.numGuests ||=10
// //nullish
// rest1.numGuests ??= 10
// rest2.numGuests ??=10

// //AND
// // rest1.owner = rest1.owner && '<ALEUUU>'
// // rest2.owner = rest2.owner && '<ALEUUU>'
// rest1.owner &&= '<ALEUUU>'
// rest2.owner &&= '<ALEUUU>'


// console.log(rest1);
// console.log(rest2);









//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 6. The bullish coalescing operator

// restaurant.numGuests = 0
// const guests = restaurant.numGuests || 10
// console.log(guests);

// // Nullist: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5. Short Circuiting

// console.log('----OR----');

// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log( undefined|| null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// console.log('----AND----');
// console.log(0&&'Jonas');
// console.log(7&&'jonas');

// console.log('Hello'&&23&&null&&'jonas');

// // Practial example
// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms','spinach');

// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4. Data Structure and Modern Operators
// Destructuring 

// // SPREAD, because on RIGHT side of = 
// const arr = [1, 2, ...[3, 4]];
// // REST, because on LEFT side of=
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const[pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza,risotto,otherFood);

// //Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays); 

// // 2) Funtions
// const add = function(...numbers){
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++) sum += 
//     numbers[i];
//     console.log(sum);
// };

// add(2, 3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23,5,7];
// add(...x);

// restaurant.orderPizza('mushrooms',
// 'onion','olives','spinach');
// restaurant.orderPizza('mushrooms')



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3. The Spread Operator
// const arr = [7,8,9];
// const badNewArr = [1 ,2 , arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1 , 2, ...arr];
// console.log(newArr);
// const newArr1 = [1 , 2, arr];
// console.log(newArr1);

// console.log(...newArr);
// console.log(1,2,7,8,9);

// const newMenu = [...restaurant.mainMenu, 'Pho Bo'];
// console.log(newMenu);
// //Coy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, trings, maps, set. Not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log('j','o');
// // console.log(`${str} Schmedtmann`);

// //Real -world example
// const ingredients = [
//     prompt("Let's make me Pasta! Ingredient 1?"),prompt("Ingredient 2?"),
//     prompt("Ingredient 3?")];
    
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects 
// const newRestaurant = {founderIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.names = 'Thanh Binh';
// console.log(restaurantCopy.names);
// console.log(restaurant.names);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1. Destructuring Arrays
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main,secondary);

// Switch variables
// const temp = main;
// main = secondary;
// secondary = temp;
//  console.log(main,secondary);

// [main, secondary] = [secondary, main]
// console.log(main,secondary);

//Receive 2 return values from a funtion
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter,mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i , , j] = nested;
// console.log(i , j);
// const [i, , [j, k]] = nested;
// console.log(i , j ,k);

//Default values
// const [p=1,q=1,r=1] = [8, 9];
// console.log(p,q,r);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2. Destructuring Object

// restaurant.oderDelivery({
//     address: 'Xuan Phuong',
//     starterIndex: 1,
// })

// restaurant.oderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// })

// const {names, openingHours, categories} = restaurant;
// console.log(names, openingHours, categories);

// const {
//     names: restaurantName, 
//     openingHours: hours,
//     categories: tags
//     } = restaurant;
// console.log(restaurantName, hours, tags);

// //Defaule value
// const {menu = [], starterMenu: staters = []} = restaurant
// console.log(menu, staters);

// // Mutaing variable
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a,b);

// // nested objects
// const {
//     fri: {open: o, close: c}, 
// } = openingHours;
// console.log(o , c);

