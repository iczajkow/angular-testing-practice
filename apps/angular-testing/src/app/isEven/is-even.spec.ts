import { isEven } from './is-even';

describe('IsEven', () => {
  it('should return true for even number', () => {
    expect(isEven(6)).toBe(true);
  });

  it('should return false for odd number', () => {
    expect(isEven(1)).toBe(false);
  });
});
