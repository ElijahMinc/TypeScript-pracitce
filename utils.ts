type testType = 'first' | 'number'

interface testForPartial {
   first: string
   number: number
}
interface testForRequired {
   first?: string
   number?: number
}
interface testForReadonly {
   first: string
   number: number
}
interface testForRecord {
   first: string
   number: number
}
interface testForPick{
   first: string
   number: number
   sybmol: symbol
}
// *Partial utils
type a = Partial<testForPartial>
type myPartial<T> = {[B in keyof T]?: T[B]}
type aWithMyPartial = myPartial<testForPartial>
// *Partial utils

// *Required
type b = Required<testForRequired>
type myRequired<T> = {[B in keyof T]-?: T[B]}
type bWithMyRequired = myRequired<testForRequired>
// *Required

// *Readonly
type c = Readonly<testForReadonly>
const testForReadonly: c = {
   first: '1',
   number: 2
}
// testForReadonly.first = '2' // !error
type cWithMyReadonly<T> = {readonly [B in keyof T]: T[B]}
const testForMyReadonly: cWithMyReadonly<testForReadonly> = {
   first: '1',
   number: 2
}
//testForMyReadonly.number = 2 // !error
// or 
const testForMyReadonlyWidthConst = <const>{
   first: '1',
   number: 2
}
//testForMyReadonlyWidthConst.number = 2 // !error
// *Readonly

// *Record
type d = Record<testType, testForRecord>
const testRecord: d = {
   first: {
      first: '2',
      number: 2
   },
   number: {
      first: '2',
      number: 2
   },
}

type typeOfAny = keyof any // string | number | symbol
type dWithMyRecord<K extends typeOfAny, T> = {[B in K]: T}

const testMyRecord: dWithMyRecord<testType,testForRecord > = {
   first: {
      first: 'string',
      number: 1
   },
   number: {
      first: 'string',
      number: 1
   }
}
// *Record

// *Pick
type e = Pick<testForPick, 'number' | 'sybmol'>
const eTestPick: e = {
   number: 2,
   sybmol: Symbol(2)
}
type testMyPick<T, K extends keyof T> = {[B in K]: T[K]}
const testMyPick: testMyPick<testForPick, 'number' | 'sybmol'> = {
   number: 2,
   sybmol: Symbol(1)
}
// *Pick

