import {HelloWorld} from '../index'


test('Hello World', () => {
  expect(HelloWorld("dhairya")).toBe('Hello World, dhairya')
})