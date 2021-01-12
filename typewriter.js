const sentence = "hello there from lighthouse labs";
let delay = 1000;
setTimeout(() => {
    // print the char here
    //let delay = 1000;
    for (const char of sentence) {
        //process.stdout.write(char);
        console.log(char);
        
        delay = delay + 5000;
      }
  }, delay);


