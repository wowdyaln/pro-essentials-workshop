//* 一般 寫法
// type Scores = {
//   [key: string]: number;
//   math: number;
//   english: number;
//   science: number;
// };

//* interface 寫法
interface Scores extends Record<string, number> {
  math: number;
  english: number;
  science: number;
}

//* type 寫法
// type Scores = {
//   math: number;
//   english: number;
//   science: number;
// } & Record<string, number>;

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
