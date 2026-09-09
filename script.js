// Task 1 — Variables and Data Types

const studentName = "Baha";
let age = 21;
const isActive = true;

const courses = ["JavaScript", "React"];

const address = {
  city: "Almaty",
  country: "Kazakhstan"
};

const emptyValue = null;
let notDefined;

const sentence = `${studentName} is ${age} years old and studies ${courses.join(", ")}.`;

document.getElementById("task1-output").innerHTML = `
  <p><strong>Name:</strong> ${studentName} — ${typeof studentName}</p>
  <p><strong>Age:</strong> ${age} — ${typeof age}</p>
  <p><strong>Active:</strong> ${isActive} — ${typeof isActive}</p>
  <p><strong>Courses:</strong> ${courses.join(", ")} — ${typeof courses}</p>
  <p><strong>Address:</strong> ${address.city}, ${address.country} — ${typeof address}</p>

  <p><strong>Null:</strong> ${emptyValue} — ${typeof emptyValue}</p>
  <p><strong>Undefined:</strong> ${notDefined} — ${typeof notDefined}</p>

  <h3>Primitive and Reference Values</h3>
  <p>Primitive: name, age, active status, null and undefined.</p>
  <p>Reference: courses array and address object.</p>

  <h3>Template Literal</h3>
  <p>${sentence}</p>

  <h3>Short Answers</h3>
  <p><strong>let vs const:</strong> let can be reassigned, while const cannot be reassigned.</p>

  <p>
    <strong>typeof null:</strong> returns "object".
    This is a historical JavaScript behavior, even though null is a primitive value.
  </p>

  <p>
    <strong>Primitive types:</strong>
    string, number, bigint, boolean, undefined, symbol and null.
  </p>
`;

// Task 2 — Arrays

const numbers = [3, 7, 2, 10, 5];

const doubledNumbers = numbers.map(number => number * 2);

const numbersGreaterThanFive = numbers.filter(number => number > 5);

const firstNumberGreaterThanFive = numbers.find(number => number > 5);

const totalSum = numbers.reduce((sum, number) => sum + number, 0);

const hasTen = numbers.includes(10);

document.getElementById("task2-output").innerHTML = `
  <p><strong>Original array:</strong> ${numbers.join(", ")}</p>

  <p><strong>Multiply by 2:</strong> ${doubledNumbers.join(", ")}</p>

  <p><strong>Numbers greater than 5:</strong> ${numbersGreaterThanFive.join(", ")}</p>

  <p><strong>First number greater than 5:</strong> ${firstNumberGreaterThanFive}</p>

  <p><strong>Sum:</strong> ${totalSum}</p>

  <p><strong>Does 10 exist?</strong> ${hasTen}</p>

  <h3>What I noticed</h3>

  <p>
    map() creates a new array by transforming every item.
    filter() creates a new array with matching items.
    find() returns only the first matching value.
  </p>

  <p>
    reduce() can combine all values into one result,
    and includes() checks whether a value exists in the array.
  </p>

  <p>
    The original array was not modified.
  </p>
`;

// Task 3 — Arrays of Objects

const students = [
  { id: 1, name: "Anna", grade: 85 },
  { id: 2, name: "John", grade: 62 },
  { id: 3, name: "Sara", grade: 91 },
  { id: 4, name: "Mike", grade: 55 }
];

const passedStudents = students.filter(student => student.grade >= 70);

const studentNames = students.map(student => student.name);

const studentWithIdThree = students.find(student => student.id === 3);

const topStudent = students.reduce((best, student) => {
  return student.grade > best.grade ? student : best;
});

const averageGrade =
  students.reduce((sum, student) => sum + student.grade, 0) / students.length;

const studentsWithPassed = students.map(student => ({
  ...student,
  passed: student.grade >= 70
}));

document.getElementById("task3-output").innerHTML = `
  <p>
    <strong>Students with grade ≥ 70:</strong>
    ${passedStudents.map(student => student.name).join(", ")}
  </p>

  <p>
    <strong>Student names:</strong>
    ${studentNames.join(", ")}
  </p>

  <p>
    <strong>Student with id = 3:</strong>
    ${studentWithIdThree.name}
  </p>

  <p>
    <strong>Highest grade:</strong>
    ${topStudent.name} — ${topStudent.grade}
  </p>

  <p>
    <strong>Average grade:</strong>
    ${averageGrade.toFixed(2)}
  </p>

  <h3>Passed Status</h3>

  ${studentsWithPassed
    .map(
      student => `
        <p>
          ${student.name}: ${student.passed}
        </p>
      `
    )
    .join("")}

  <h3>What I noticed</h3>

  <p>
    map() can create new objects without changing the original ones.
    The spread operator copies the student's existing properties and lets us add
    a new passed property.
  </p>
`;
// Task 4 — Objects

const user = {
  id: 1,
  name: "Adlet",
  age: 21,
  address: {
    city: "Almaty",
    street: "Abay Street"
  }
};

// Read name and city
const originalName = user.name;
const originalCity = user.address.city;

// Change age
user.age = 22;

// Add email
user.email = "adlet@example.com";

// Remove street
delete user.address.street;

// Get name and age using destructuring
const {
  name: destructuredName,
  age: destructuredAge
} = user;

// Get city using nested destructuring
const {
  address: {
    city: destructuredCity
  }
} = user;

// Rename name to userName during destructuring
const {
  name: userName
} = user;

document.getElementById("task4-output").innerHTML = `
  <p><strong>Name:</strong> ${originalName}</p>

  <p><strong>City:</strong> ${originalCity}</p>

  <p><strong>Updated age:</strong> ${user.age}</p>

  <p><strong>Email:</strong> ${user.email}</p>

  <p>
    <strong>Street after deletion:</strong>
    ${user.address.street}
  </p>

  <h3>Destructuring</h3>

  <p>
    <strong>Name:</strong>
    ${destructuredName}
  </p>

  <p>
    <strong>Age:</strong>
    ${destructuredAge}
  </p>

  <p>
    <strong>Nested city:</strong>
    ${destructuredCity}
  </p>

  <p>
    <strong>Renamed name → userName:</strong>
    ${userName}
  </p>

  <h3>What I noticed</h3>

  <p>
    Object properties can be updated, added, and removed.
    Destructuring makes it easier to extract values from objects,
    including nested objects.
  </p>
`;

// Task 5 — Values and References

const original = {
  name: "Alice",
  score: 10
};

const copy = original;

copy.score = 20;

const spreadCopy = {
  ...original
};

spreadCopy.score = 30;

const nestedUser = {
  name: "Alice",
  address: {
    city: "Almaty"
  }
};

const shallowCopy = {
  ...nestedUser
};

shallowCopy.address.city = "Astana";

const correctCopy = {
  ...nestedUser,
  address: {
    ...nestedUser.address
  }
};

correctCopy.address.city = "Shymkent";

document.getElementById("task5-output").innerHTML = `
  <h3>Reference Copy</h3>

  <p><strong>Original score:</strong> ${original.score}</p>
  <p><strong>Copy score:</strong> ${copy.score}</p>

  <p>
    copy = original means both variables point to the same object.
    Changing copy.score also changes original.score.
  </p>

  <h3>Spread Copy</h3>

  <p><strong>Original score:</strong> ${original.score}</p>
  <p><strong>Spread copy score:</strong> ${spreadCopy.score}</p>

  <p>
    The spread operator creates a new object,
    so changing spreadCopy.score does not change the original object.
  </p>

  <h3>Nested Object</h3>

  <p><strong>Original city after shallow copy change:</strong> ${nestedUser.address.city}</p>

  <p>
    A spread copy is shallow.
    The nested address object is still shared between both objects.
  </p>

  <p><strong>Correct copy city:</strong> ${correctCopy.address.city}</p>
  <p><strong>Original city:</strong> ${nestedUser.address.city}</p>

  <h3>What I noticed</h3>

  <p>
    Objects are reference values.
    A shallow copy copies only the first level.
    Nested objects must also be copied separately if we want them to be independent.
  </p>
`;

// Task 6 — Functions

function isEven(number) {
  return number % 2 === 0;
}

const isEvenArrow = number => number % 2 === 0;

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function calculatePrice(price, quantity) {
  return price * quantity;
}

function calculateDiscount(price, percent) {
  return price - (price * percent / 100);
}

function getMax(a, b) {
  return a > b ? a : b;
}

document.getElementById("task6-output").innerHTML = `
  <p><strong>isEven(10):</strong> ${isEven(10)}</p>

  <p><strong>isEven(7):</strong> ${isEven(7)}</p>

  <p>
    <strong>Arrow version isEvenArrow(8):</strong>
    ${isEvenArrow(8)}
  </p>

  <p>
    <strong>Full name:</strong>
    ${getFullName("Adlet", "Yesbergen")}
  </p>

  <p>
    <strong>Price × quantity:</strong>
    ${calculatePrice(2500, 3)}
  </p>

  <p>
    <strong>Price after 20% discount:</strong>
    ${calculateDiscount(10000, 20)}
  </p>

  <p>
    <strong>Max of 15 and 22:</strong>
    ${getMax(15, 22)}
  </p>

  <h3>What I noticed</h3>

  <p>
    Functions can accept parameters and return a result.
    Arrow functions can make simple functions shorter.
  </p>

  <p>
    Both the normal function and the arrow function can produce
    the same result.
  </p>
`;