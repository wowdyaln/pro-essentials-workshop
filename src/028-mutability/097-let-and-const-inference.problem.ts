// CODE

const type = "button";
// let type: ButtonAttributes["type"] = "button";

// TESTS

type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const buttonAttributes: ButtonAttributes = {
  type,
};
