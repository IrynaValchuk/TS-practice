// 1. Задайте правильні ts типи для класичних js.
let age: number;
age = 50;

let nameUser: string;
nameUser = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

type Mycallback = (a: number) => number;
let callback: Mycallback;

callback = (a) => {
  return 100 + a;
};

// 2. Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything: any;

anything = -20;
anything = "Text";
anything = {};

// 3. Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// 4. Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number];

person = ["Max", 21];

// 5. Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Status {
  LOADING,
  READY,
}

const page = {
  status: Status.LOADING,
};

if (page.status === Status.LOADING) {
  console.log("Page loading");
}

if (page.status === Status.READY) {
  console.log("Page ready");
}

// 6. Зробіть змінну, яка може приймати або рядок, або число.
let union: string | number;

// 7. Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let literal: "enable" | "disable";

// 8. Вкажіть типи для наступних функцій
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// 9.Створіть свій тип даних на основі наявних даних.
type TypePage = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: TypePage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: TypePage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
