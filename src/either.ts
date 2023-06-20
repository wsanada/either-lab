const EitherConstructor: new <T, E>(...p: [T, E]) => [T, E] = Array as any

export class Either<T, E = any> extends EitherConstructor<T, E>{
  constructor(...p: [T, E]) { super(...p) }

  static ok<T>(value: T): Either<T, null> { return new Either(value, null) }
  static fail<E>(error: E): Either<null, E> { return new Either(null, error) }
  getOk(): T { return this[0] }
  getFail(): E { return this[1] }
  isOk(): boolean { return this[1] === null }
  isFail(): boolean { return this[1] !== null }
}
