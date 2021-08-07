# 🪙 `ts-shuffle`

An *incredibly modular & complex package* to shuffle the contents of a given array randomly.

## Install

```bash
npm i ts-shuffle
# or
yarn add ts-shuffle
```

## Use

```ts
import { shuffle } from "ts-shuffle";

const arr: number[] = [2, 11, 37, 42];

shuffle(arr);

// Log the shuffled array (ex. [11, 42, 37, 2]):
console.log(arr);
```

The `shuffle` function takes in a parameter type of `any[]`, meaning that as long as it is an array, the shuffling process will work. :)

Built and maintained with ❤️ by [**@FilippoFonseca**](https://twitter.com/FilippoFonseca).
