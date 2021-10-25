"use strict";
// console.log('hello world')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// interface IAnimal {
//    name: string
//    age: number
//    sayHello(): void
// }
// class Animal implements IAnimal {
//    name: string
//    age: number
//    constructor(name: string, age: number) {
//       this.name = name
//       this.age = age
//    }
//    sayHello() {
//       console.log(`Hello, I am ${this.name}`)
//    }
// }
// const Cat = new Animal('Cat', 7)
// namespace Animals {
//    export const animal = {
//       name: 'Vasya',
//       age: 22,
//       sayHello(): string {
//          return 'hello'
//       }
//    }
// }
// interface IAnimal {
//    name: string
//    age: number
// }
// type TypesNameOfAnimals = 'tiger' | 'dog' | 'cat'
// var Animals: Partial<Record<TypesNameOfAnimals, IAnimal>> = {};
// (function (Animal) {
//    Animal.tiger = {
//       name: 'Tiger',
//       age: 22
//    }
// })(Animals)
const headers = 'application/json; charset=UTF-8';
const utilsRequest = (config) => {
    const creater = {
        method: config.method,
        body: config.body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };
    return creater;
};
var TodosMethods;
(function (TodosMethods) {
    TodosMethods.getTodos = () => __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const response = yield request.json();
        return response;
    });
    TodosMethods.createTodo = (body) => __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: body.title,
                body: body.body,
                userId: body.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return request.json();
    });
})(TodosMethods || (TodosMethods = {}));
const process = () => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield TodosMethods.getTodos();
    console.log(todos);
});
const createTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const create = yield TodosMethods.createTodo({
        title: 'Hello new Todo',
        body: 'I am new Todo',
        userId: 1
    });
    console.log(create);
});
console.log(process());
console.log(createTodo());
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const count = () => {
    let counter = 0;
    return () => {
        text.innerHTML = `${counter++}`;
    };
};
count()();
btn.addEventListener('click', count());
//# sourceMappingURL=script.js.map