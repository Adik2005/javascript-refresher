// Task 1 — Variables and Data Types

const studentName = "Adik";
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

// Task 7 — Functions as Values

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

const addResult = calculate(5, 3, add);
const multiplyResult = calculate(5, 3, multiply);

const storedFunction = add;

document.getElementById("task7-output").innerHTML = `
  <p>
    <strong>calculate(5, 3, add):</strong>
    ${addResult}
  </p>

  <p>
    <strong>calculate(5, 3, multiply):</strong>
    ${multiplyResult}
  </p>

  <p>
    <strong>Function stored in a variable:</strong>
    ${storedFunction(10, 5)}
  </p>

  <h3>Short Answers</h3>

  <p>
    <strong>Can functions be stored in variables?</strong>
    Yes. Functions are values in JavaScript and can be assigned to variables.
  </p>

  <p>
    <strong>Can functions be passed to other functions?</strong>
    Yes. For example, calculate() receives add or multiply as an argument.
  </p>

  <p>
    <strong>Difference between add and add():</strong>
    add refers to the function itself, while add() calls the function.
  </p>

  <h3>What I Noticed</h3>

  <p>
    JavaScript functions can be treated like other values.
    They can be stored, passed as arguments, and executed inside other functions.
  </p>
`;

// Task 8 — Scope

const message = "global";

function scopeExample() {
  const functionResults = [];

  const message = "function";
  functionResults.push(`Function scope: ${message}`);

  if (true) {
    const message = "block";
    functionResults.push(`Block scope: ${message}`);
  }

  functionResults.push(`Back in function scope: ${message}`);

  return functionResults;
}

const scopeResults = scopeExample();

function variableScopeExample() {
  if (true) {
    var varVariable = "I was created with var";
    let letVariable = "I was created with let";
    const constVariable = "I was created with const";
  }

  const varResult = varVariable;

  let letResult;
  let constResult;

  try {
    letResult = letVariable;
  } catch (error) {
    letResult = error.name;
  }

  try {
    constResult = constVariable;
  } catch (error) {
    constResult = error.name;
  }

  return {
    varResult,
    letResult,
    constResult
  };
}

const variableResults = variableScopeExample();

document.getElementById("task8-output").innerHTML = `
  <h3>Message Scope</h3>

  <p><strong>Global scope:</strong> ${message}</p>

  <p><strong>${scopeResults[0]}</strong></p>

  <p><strong>${scopeResults[1]}</strong></p>

  <p><strong>${scopeResults[2]}</strong></p>

  <h3>var, let and const</h3>

  <p>
    <strong>var outside the block:</strong>
    ${variableResults.varResult}
  </p>

  <p>
    <strong>let outside the block:</strong>
    ${variableResults.letResult}
  </p>

  <p>
    <strong>const outside the block:</strong>
    ${variableResults.constResult}
  </p>

  <h3>Short Explanation</h3>

  <p>
    <strong>Global scope:</strong>
    variables declared outside functions and blocks can be accessed from other parts of the script.
  </p>

  <p>
    <strong>Function scope:</strong>
    variables declared inside a function are available only inside that function.
  </p>

  <p>
    <strong>Block scope:</strong>
    let and const declared inside a block are available only inside that block.
  </p>

  <p>
    <strong>var vs let vs const:</strong>
    var is function-scoped, while let and const are block-scoped.
    let can be reassigned, while const cannot be reassigned.
  </p>

  <h3>What I Noticed</h3>

  <p>
    Variables with the same name can exist in different scopes.
    Inner variables can temporarily shadow variables from outer scopes.
  </p>
`;

// Task 9 — Closure

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

const counterFirst = counter();
const counterSecond = counter();
const counterThird = counter();

const anotherCounter = createCounter();

const anotherCounterFirst = anotherCounter();
const anotherCounterSecond = anotherCounter();

function createAdder(value) {
  return function (number) {
    return value + number;
  };
}

const addFive = createAdder(5);

const addFiveToTen = addFive(10);
const addFiveToTwenty = addFive(20);

document.getElementById("task9-output").innerHTML = `
  <h3>Counter</h3>

  <p><strong>counter() first call:</strong> ${counterFirst}</p>
  <p><strong>counter() second call:</strong> ${counterSecond}</p>
  <p><strong>counter() third call:</strong> ${counterThird}</p>

  <h3>Another Counter</h3>

  <p><strong>anotherCounter() first call:</strong> ${anotherCounterFirst}</p>
  <p><strong>anotherCounter() second call:</strong> ${anotherCounterSecond}</p>

  <h3>createAdder</h3>

  <p><strong>addFive(10):</strong> ${addFiveToTen}</p>
  <p><strong>addFive(20):</strong> ${addFiveToTwenty}</p>

  <h3>What I Noticed</h3>

  <p>
    A closure allows the inner function to remember variables
    from the outer function even after the outer function has finished running.
  </p>

  <p>
    Each call to createCounter() creates its own separate count variable,
    so the counters do not affect each other.
  </p>
`;

// Task 10 — Destructuring, Spread and Rest

const task10Numbers = [10, 20, 30, 40];

const [firstNumber, secondNumber] = task10Numbers;

const task10User = {
  id: 1,
  name: "Anna",
  age: 21
};

const {
  name: task10Name,
  age: task10Age
} = task10User;

const numbersWithFifty = [
  ...task10Numbers,
  50
];

const userWithNewAge = {
  ...task10User,
  age: 22
};

const userWithEmail = {
  ...task10User,
  email: "anna@example.com"
};

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combinedArray = [
  ...firstArray,
  ...secondArray
];

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

document.getElementById("task10-output").innerHTML = `
  <h3>Destructuring</h3>

  <p><strong>First value:</strong> ${firstNumber}</p>
  <p><strong>Second value:</strong> ${secondNumber}</p>

  <p><strong>User name:</strong> ${task10Name}</p>
  <p><strong>User age:</strong> ${task10Age}</p>

  <h3>Spread</h3>

  <p>
    <strong>Original numbers:</strong>
    ${task10Numbers.join(", ")}
  </p>

  <p>
    <strong>New array with 50:</strong>
    ${numbersWithFifty.join(", ")}
  </p>

  <p>
    <strong>New user age:</strong>
    ${userWithNewAge.age}
  </p>

  <p>
    <strong>User with email:</strong>
    ${userWithEmail.name}, ${userWithEmail.email}
  </p>

  <p>
    <strong>Combined arrays:</strong>
    ${combinedArray.join(", ")}
  </p>

  <h3>Rest</h3>

  <p><strong>sum(1, 2):</strong> ${sum(1, 2)}</p>

  <p>
    <strong>sum(1, 2, 3, 4):</strong>
    ${sum(1, 2, 3, 4)}
  </p>

  <h3>What I Noticed</h3>

  <p>
    Spread expands values from an array or object into a new structure.
    Rest collects multiple arguments into a single array.
  </p>
`;

// Task 11 — Optional Chaining and Default Values

const userWithAddress = {
  name: "Anna",
  address: {
    city: "Almaty"
  }
};

const userWithoutAddress = {
  name: "John"
};

let directAccessResult;

try {
  directAccessResult = userWithoutAddress.address.city;
} catch (error) {
  directAccessResult = error.name;
}

const cityWithOptionalChaining =
  userWithoutAddress.address?.city;

const cityWithDefault =
  userWithoutAddress.address?.city ?? "City not specified";

const valuesToCompare = [
  0,
  "",
  false,
  null,
  undefined
];

const comparisonResults = valuesToCompare.map(value => ({
  value,
  orResult: value || "default",
  nullishResult: value ?? "default"
}));

document.getElementById("task11-output").innerHTML = `
  <h3>Optional Chaining</h3>

  <p>
    <strong>User with address:</strong>
    ${userWithAddress.address.city}
  </p>

  <p>
    <strong>Direct access without address:</strong>
    ${directAccessResult}
  </p>

  <p>
    <strong>Optional chaining result:</strong>
    ${cityWithOptionalChaining}
  </p>

  <p>
    <strong>With default value:</strong>
    ${cityWithDefault}
  </p>

  <h3>|| vs ??</h3>

  ${comparisonResults.map(item => `
    <p>
      <strong>Value:</strong> ${String(item.value)}
      |
      <strong>||:</strong> ${String(item.orResult)}
      |
      <strong>??:</strong> ${String(item.nullishResult)}
    </p>
  `).join("")}

  <h3>What I Noticed</h3>

  <p>
    Optional chaining prevents an error when a nested property does not exist.
  </p>

  <p>
    The || operator uses the fallback for all falsy values,
    including 0, empty string, and false.
    The ?? operator uses the fallback only for null and undefined.
  </p>
`;

// Final Task — Students

const finalStudents = [
  {
    id: 1,
    name: "Anna",
    age: 20,
    grades: [85, 90, 88]
  },
  {
    id: 2,
    name: "John",
    age: 21,
    grades: [65, 70, 68]
  },
  {
    id: 3,
    name: "Sara",
    age: 19,
    grades: [95, 91, 93]
  },
  {
    id: 4,
    name: "Mike",
    age: 22,
    grades: [55, 60, 58]
  },
  {
    id: 5,
    name: "Emma",
    age: 20,
    grades: [78, 82, 80]
  }
];

function getAverage(grades) {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function getStudentAverage(student) {
  return getAverage(student.grades);
}

function getPassedStudents(students) {
  return students.filter(student => getStudentAverage(student) >= 70);
}

function getStudentNames(students) {
  return students.map(student => student.name);
}

function findStudent(students, id) {
  return students.find(student => student.id === id);
}

function getTopStudent(students) {
  return students.reduce((topStudent, student) => {
    return getStudentAverage(student) > getStudentAverage(topStudent)
      ? student
      : topStudent;
  });
}

const finalPassedStudents = getPassedStudents(finalStudents);

const finalStudentNames = getStudentNames(finalStudents);

const foundFinalStudent = findStudent(finalStudents, 3);

const finalTopStudent = getTopStudent(finalStudents);

const finalStudentResults = finalStudents.map(student => {
  const average = getStudentAverage(student);

  return {
    id: student.id,
    name: student.name,
    average: Number(average.toFixed(2)),
    passed: average >= 70
  };
});

document.getElementById("final-task-output").innerHTML = `
  <h3>Student Names</h3>

  <p>${finalStudentNames.join(", ")}</p>

  <h3>Passed Students</h3>

  <p>
    ${finalPassedStudents.map(student => student.name).join(", ")}
  </p>

  <h3>Find Student</h3>

  <p>
    <strong>Student with id = 3:</strong>
    ${foundFinalStudent.name}
  </p>

  <h3>Top Student</h3>

  <p>
    <strong>${finalTopStudent.name}</strong>
    — average:
    ${getStudentAverage(finalTopStudent).toFixed(2)}
  </p>

  <h3>Final Result</h3>

  <table border="1" cellpadding="8">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Average</th>
        <th>Passed</th>
      </tr>
    </thead>

    <tbody>
      ${finalStudentResults.map(student => `
        <tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.average}</td>
          <td>${student.passed}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>

  <h3>What I Noticed</h3>

  <p>
    Smaller reusable functions make the code easier to understand.
    getStudentAverage() reuses getAverage(), and the other functions
    work with the same student data without modifying the original array.
  </p>

  <p>
    map() creates the final array with id, name, average and passed
    while keeping the original student objects unchanged.
  </p>
`;