console.log('First!');

setTimeout(function second(){
    console.log('Timed out');
}, 0000)

console.log('Final')

// As usual, our code will move into the call stack and the event loop will loop through line by line.

// We will get “First!” in the console and it will be moved out of the call stack.

// Now, the event loop will move to the second line and push it into the call stack. It will encounter the setTimeout function,
// which is a Macro task, and it will be executed in the next event Loop.

// And now, you might be wondering what a Macro task is. Well, it's a task that runs after all of the tasks in the Event Loop, 
// or you might say, in the other Event Loop. The SetTimeout and SetInterval functions can be the example of a Macro task which
// runs after all of the other tasks are completed