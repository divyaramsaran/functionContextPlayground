# Function Context Playground

## Problem Statement

As a JavaScript developer, mastering how functions handle context (`this`) is critical for writing robust, flexible code. In this project, you will build a small console-based application that demonstrates real-world use cases for the `call`, `apply`, and `bind` methods. This project will help you understand how to explicitly control function context, pass arguments dynamically, and create reusable function variants.

---

## Project Name

**Function Context Playground**

---

## Functional Requirements

- **Demonstrate `call`**  
  Use `call` to invoke a function with a specified context and individual arguments.
- **Demonstrate `apply`**  
  Use `apply` to invoke a function with a specified context and an array of arguments.
- **Demonstrate `bind`**  
  Use `bind` to create a new function with a permanently bound context and optionally preset arguments.
- **Real-World Scenarios**  
  Implement examples such as borrowing methods between objects, partial application, and event handler context fixing.
- **User Interaction**  
  Allow the user to select which method to demonstrate and show the input, output, and context at each step.

---

## Input

1. **User Selection:**  
   The user chooses which method to demonstrate: `call`, `apply`, or `bind`.

2. **Sample Data:**

   - Two or more objects representing users or accounts.
   - Functions that operate on these objects, such as greeting or transaction functions.

3. **Arguments:**
   - For `call` and `apply`, arguments to pass to the target function.
   - For `bind`, arguments to preset for partial application.

---

## Output

- **Console Logs:**
  - The function being called, the context (`this`), and the arguments.
  - The result of the function call.
  - For `bind`, demonstrate the new function and its output.

#### Example Output

Select demonstration: 1. call 2. apply 3. bind

1

--- call Example ---
user1.greet.call(user2, "Good morning")
Context: user2 { name: "Alice" }
Arguments: "Good morning"
Output: Good morning, Alice!

undefined

Select demonstration: 2. apply

--- apply Example ---
user1.greet.apply(user3, ["Hello"])
Context: user3 { name: "Bob" }
Arguments: ["Hello"]
Output: Hello, Bob!

undefined

Select demonstration: 3. bind

--- bind Example ---
const sayHiToCharlie = user1.greet.bind(user4, "Hi")
sayHiToCharlie()
Context: user4 { name: "Charlie" }
Arguments: "Hi"
Output: Hi, Charlie!
