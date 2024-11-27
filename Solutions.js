// *** Solution 01 *** //

function createHelloWorld(){
  function helloWorld(){
      return "Hello World";
  }
  return helloWorld();
}
const f = createHelloWorld();
console.log(f);

// *** Solution 02 *** //

function expect(val){
  return {
      toBe: function(toBe){
          if(val === toBe){
              return true;
          }else{
            throw new Error("Not Equal")
        }
      },
      notToBe: function(notToBe){
          if(val !== notToBe){
              return true;
          }else{
              throw new Error("Equal")
          }
      }
  }
}
const testNum = func = () => expect(51).toBe(51);
const testNum2 = expect((4)).toBe(4);
const testNum3 = func = () => expect(7).notToBe(7);
console.log(testNum(), testNum2, testNum3);

// *** Solution 03 *** //

function createCounter(init) {
  let countVal = init; 
  return {
    increment: function () {
      countVal += 1
      return countVal;
    },
    decrement: function () {
      countVal -= 1;
      return countVal;
    },
    reset: function () {
      countVal = init;
      return countVal;
    },
  };
}
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

const counter2 = createCounter(0);
console.log(counter2.increment(), counter2.increment(), counter2.decrement(), counter2.reset(), counter2.reset());

