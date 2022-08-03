const YAND = [
    "+----------------0---------------+\n" +
    "|                                |\n" +
    "|                                |\n" +
    "|          Y        D            |\n" +
    "|     A                          |\n" +
    "|              E                 |\n" +
    "|           N                    |\n" +
    "|  Y                             1\n" +
    "3        Y    D                  |\n" +
    "|         A              X       |\n" +
    "|                                |\n" +
    "+----------------2---------------+"
];
const STRING = ["Y", "A", "N", "D", "E", "X"]; // макароны
const SYMBOLS = ["-", "+", " ", "|"];

let holes = [];
let pasta = [];

const matrix = YAND.join()
    .split("\n")
    .map((row) => {
        return row.split("");
    }); //разделение массива YAND на масссив yaStroka

matrix.forEach((row, x) => {
    row.forEach((element, y) => {
        if (STRING.includes(element)) {
            pasta.push({ a: element, x, y });
            return;
        } //буква (макароны)

        if (
            typeof Number(element) === "number" &&
            SYMBOLS.includes(element) === false
        ) {
            holes.push({ a: Number(element), x, y });
        } //числа (отверстия)
    });
});


const result = [];
pasta.forEach((symbol) => {
    const distances = holes.map(
        (hole) => Math.abs(symbol.x - hole.x) + Math.abs(symbol.y - hole.y)
    );

    result.push(Math.min(...distances));
});

const time = Math.max(...result) + 1;
console.log(time);