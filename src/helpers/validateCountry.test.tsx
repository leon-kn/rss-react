import { it, expect, vi } from 'vitest';
import { validateCountry } from './validateCountry';
const mockSetState = vi.fn();

describe('validateCountry function', () => {
  const COUNTRY_SELECTED = 'France';
  const COUNTRY_NOT_SELECTED = '';

  it('must check if the country is selected', () => {
    expect(validateCountry(COUNTRY_SELECTED, mockSetState));
  });

  it('must check if the country is selected', () => {
    expect(validateCountry(COUNTRY_NOT_SELECTED, mockSetState));
  });
});
