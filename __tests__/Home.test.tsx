import { expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from 'src/pages';
import { mockUseMutation, mockUseQuery } from './utils';

test('home', () => {
    mockUseQuery({data:[],error:undefined});
    const {mutate} = mockUseMutation();
    render(<Home />);
    const main = within(screen.getByRole('main'));
    const btn = within(main.getByRole('button'));

    expect( main ).toBeDefined();
    expect(btn).toBeDefined();
  });