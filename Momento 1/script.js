

// Block-scope
if (true) {
  var foo = 'peekaboo!';
  let bar = 'i see u';
  const baz = 'baby blue!';

  console.log(foo); // 'peekaboo!';
  console.log(bar); // 'i see u';
  console.log(baz); // 'baby blue!';
}

console.log(foo); // 'peekaboo!';
console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined

// for-loop
for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  
  console.log(i);


// Get Element by ID
const element = document.getElementById('alligator');