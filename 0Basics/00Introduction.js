// ECMASCRIPT - Standards on which JS is based
// JS and ECMASCRIPT are interchangably used
// JS is very liberal in what it allows - Tries to run the program anyhow

// How to Execute JS?
// 1. in Browser - Console
// 2.  Runtime:  Node.JS -> Browser's v8 Engine in C++ => 
// To execute JS outside the Browsers as an Platform/Browser independent Programming Language
// 3. <script> tag in HTML
// 4. repl.it => Online Code Sandbox

console.log("This Program adds three Numbers:")

function addThreeNumbers(a, b, c)
{
    return a + b + c;
}

let c = addThreeNumbers(10,20,30)
console.log(c)