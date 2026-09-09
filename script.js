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