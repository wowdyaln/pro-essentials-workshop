// //* 方法1

// function printNames(names: ReadonlyArray<string>) {
//   for (const name of names) {
//     console.log(name);
//   }

//   // @ts-expect-error
//   names.push("John");

//   // @ts-expect-error
//   names[0] = "Billy";
// }

//* 方法2
function printNames(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }

  // @ts-expect-error
  names.push("John");

  // @ts-expect-error
  names[0] = "Billy";
}
