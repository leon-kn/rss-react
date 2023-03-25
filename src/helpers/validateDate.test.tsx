import { it, expect, vi } from 'vitest';
import { validateDate } from './validateDate';
const mockSetState = vi.fn();

describe('validateDate function', () => {
  const FUTURE_DATE = '11-11-2077';
  const CORRECT_DATE = '11-11-1991';

  it('check if the date is correct', () => {
    expect(validateDate(CORRECT_DATE, mockSetState));
  });

  it('check if the date is future', () => {
    expect(validateDate(FUTURE_DATE, mockSetState));
  });
});
