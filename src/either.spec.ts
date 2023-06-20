import { describe, it, expect } from "vitest"
import { Either } from "./either"

const doSomething = (isOk: boolean): Either<Number[], Error> => {
  if (isOk) {
    return Either.ok([1, 2, 3])
  }
  return Either.fail(new Error())
}

describe('Classe Either', () => {
  it('array', () => {
    const response = new Either(1, 2)
    expect(response).toBeInstanceOf(Array)
    expect(response).toEqual([1, 2])
  })
  it('ok', () => {
    const [dado, erro] = doSomething(true)
    expect(dado).toStrictEqual([1, 2, 3])
    expect(erro).toBeNull()
  })
  it('fail', () => {
    const [dado, erro] = doSomething(false)
    expect(dado).toBeNull()
    expect(erro).toBeInstanceOf(Error)
  })
  it('Either ok', () => {
    const [dado, erro] = Either.ok([1, 2, 3])
    expect(dado).toStrictEqual([1, 2, 3])
    expect(erro).toBeNull()
  })
  it('Either fail', () => {
    const [dado, erro] = Either.fail(new Error())
    expect(dado).toBeNull()
    expect(erro).toBeInstanceOf(Error)
  })
  it('Deve ser possível verificar se está ok', () => {
    let result = doSomething(true).isOk()
    expect(result).toBeTruthy()

    result = doSomething(false).isOk()
    expect(result).toBeFalsy()
  })
  it('Deve ser possível verificar se está fail', () => {
    let result = doSomething(true).isFail()
    expect(result).toBeFalsy()

    result = doSomething(false).isFail()
    expect(result).toBeTruthy()
  })

})