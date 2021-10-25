const obj = {
   name: 'Ilya',
   age: 22,
}

const op = new Proxy(obj, {
   get(target, prop) {
      console.log('target', target)
      console.log('prop', prop)
      return target[prop] 
   },
   set(target, prop) {

      console.log('target', target)
      console.log('prop', prop)
      return target[prop] = prop
   }
})

op.name