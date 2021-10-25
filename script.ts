// console.log('hello world')


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


const headers = 'application/json; charset=UTF-8'
type IHeaders = Record<'Content-type', typeof headers>


interface IData {
   userId: 1,
   id: 1,
   title: 'delectus aut autem',
   completed: false
}

interface ICreateData {
   title: string
   body: string,
   userId: number
}



interface IConfigRequest {
   method: methods
   body: string
   headers?: IHeaders
}


type methods = 'POST' | 'GET' | 'DELETE' | 'PUT'

const utilsRequest = (config: IConfigRequest): IConfigRequest => {
   const creater = {
      method: config.method,
      body: config.body,
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   }
   return creater as Omit<IConfigRequest, 'headers'>
}

namespace TodosMethods {
   export const getTodos = async () => {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts')
      const response: IData = await request.json()
      return response
   }
   export const createTodo = async (body: ICreateData) => {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: body.title,
            body: body.body,
            userId: body.userId,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })

      return request.json()
   }
}

const process = async () => {
   const todos = await TodosMethods.getTodos()
   console.log(todos)
}

const createTodo = async () => {
   const create = await TodosMethods.createTodo({
      title: 'Hello new Todo',
      body: 'I am new Todo',
      userId: 1
   })
   console.log(create)
}
console.log(process())
console.log(createTodo())





const btn = document.querySelector('#btn')!
const text = document.querySelector('#text')!

const count = () => {
   let counter = 0
   return () => {
      text.innerHTML = `${counter++}`
   }
}
count()()
btn.addEventListener('click', count())



