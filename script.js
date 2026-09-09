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