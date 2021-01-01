/* I know what you are wondering "WHY IS THIS NAME SO LONG!?" its long on purpose to show you that if
a co-worker decides this is a good idea and you cant change it, you can just assign it to a
variable that way you don't have to constantly type this long function name. Anyways, this function check
that 2 + 2 = 4 a million times because we cant to be EXTRA sure, right? */
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

/*Here we are assigning a function with a long name with another function as a parameter that way 
we call two functions at once that work hand in hand */
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

//Now here we are creating a function that will take in a function and a value as parameters
const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);

  if (firstTry === secondTry){
    console.log(firstTry)
    return firstTry
  } else {
    return 'This function returned inconsistent results'
  }
}

checkConsistentOutput(addTwo, 2) //The output will be 4
