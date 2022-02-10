import { it } from 'eslint/lib/rule-tester/rule-tester';
import { makeCounter } from './index';

it('should counter step up number', () => {
  const counter1 = makeCounter();

  expect(counter1()).toEqual(0);
  expect(counter1()).toEqual(1);
});
