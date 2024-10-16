// 1
const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: undefined
};

function checkIfPropertyIsDefined(user, property) {
    if (user.hasOwnProperty(property) && user[property] !== undefined) {
        return true;
    }
    return false;
}

console.log(checkIfPropertyIsDefined(user, 'firstName')); // true
console.log(checkIfPropertyIsDefined(user, 'age')); // false
console.log(checkIfPropertyIsDefined(user, 'height')); // false

function checkIfPropertyIsDefined(user, property) {
    return user.hasOwnProperty(property) && user[property] !== undefined;
}

console.log(checkIfPropertyIsDefined(user, 'firstName')); // true
console.log(checkIfPropertyIsDefined(user, 'age')); // false
console.log(checkIfPropertyIsDefined(user, 'height')); // false

// 2
const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}

const salarySum = salaries.john + salaries.adam + salaries.katie;

console.log(salarySum);

// 3
console.log(typeof {}); // console logs object so I've to use "object"
console.log(typeof null); // I'didn't expect that null is also an object

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

console.log(isObject({})); // true
console.log(isObject(10)); // false
console.log(isObject(null)); // false

// 4
function removeProperty(user4, key) {
    if (user4.hasOwnProperty(key)) {
        delete user4[key];
        return true;
    }
    return false;
}

const user4 = { //I named it user4 because in the first assignment I already used 'user'
    name: 'John',
    weight: 66,
    height: 175,
};

console.log(removeProperty(user4, 'name')); // true
console.log(removeProperty(user4, 'name')); // false
console.log(removeProperty(user4, 'weight')); // true
console.log(removeProperty(user4, 'weight')); // false

console.log(user4); // {} the only value that is left is height and it will only display the height, I added it so I can understand the code better

// 5
function checkIfUsersHaveTheSameName(user1, user2) {
    return user1.firstName === user2.firstName && user1.lastName === user2.lastName;
}

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn)); // true
console.log(checkIfUsersHaveTheSameName(firstJohn, adam)); // false

// 6
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

// 7
function getCubeVolume(dimensions) {
    return dimensions.width * dimensions.length * dimensions.height;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2 })); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0 })); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5 })); // 150

// 8
function getCityInformation(city) {
    return `${city.name} is in ${city.country} and has an area of ${city.areaInKilometers} square kilometers`;
} // so I understand that $ before {} gives the possibility to target a property form an object

console.log(getCityInformation({
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517
})); // Output: Warsaw is in Poland and has an area of 517 square kilometers

// 9
function getUserCopy(user9) {
    return {
        firstName: user9.firstName,
        lastName: user9.lastName
    } ;
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

const newUser = getUserCopy(john);
console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

// 10 identical as the warsaw assignment
function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: "dog", legs: 4, color: "white" })); // Output: "This white dog has 4 legs."

// 11 only added comma's and closed some }
var rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient',
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water',
        }
    }
}

// 12
/*
function addContact(contacts, name, phoneNumber) {
    const newContacts = {};

    newContacts[name] = {
        name: name,
        phoneNumber: phoneNumber,
    };
    return newContacts;
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined
*/

// 13
function addContact(contacts, name, phoneNumber) {
    const newContacts = {};

    newContacts[name] = {
        name: name,
        phoneNumber: phoneNumber,
    };
    return newContacts;
}

function findContact(contacts, name) {
    if (contacts[name]) {
        return `Name: ${contacts[name].name}, Phone: ${contacts[name].phoneNumber}`;
    }
    return undefined;
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"

// 14
function validateIfObjectIsAUser(object) {
    if (
        typeof object.firstName === 'string' &&
        typeof object.lastName === 'string' &&
        typeof object.age === 'number' &&
        object.greet() === `Hi, I'm ${object.firstName} ${object.lastName}!`
    ) {
        return true;
    }
    return false;
}

const user14 = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: 40,
    greet() {
        return "Hi, I'm Bob Ross!";
    }
}
const objectExample = {
    firstName: 'Kate',
    lastName: 'Williams',
    age: 40,
    greet() {
        return "Hi, I'm Kate!";
    }
}
const car = {
    make: 'Ferrari',
    model: 'F40',
    greet() {
        return "<engine noise>";
    }
}

console.log(validateIfObjectIsAUser(user14)); // true
console.log(validateIfObjectIsAUser(objectExample)); // false
console.log(validateIfObjectIsAUser(car)); // false