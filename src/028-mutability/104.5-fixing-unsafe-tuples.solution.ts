type Coordinate = readonly [number, number];
const myHouse: Coordinate = [0, 0];

const dangerousFunction = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};

dangerousFunction(
  // @ts-expect-error
  myHouse
);

/*

I would almost recommend any time that you want to use tuples, 
you probably actually need read-only tuples 
because they prevent weirdnesses like this from occurring.

*/
