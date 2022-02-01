import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/store'
import { render } from '@testing-library/react';
import App from '../../App'
import NewPokemon  from '../addPokemon/addPokemon';

describe('AddPokemon', () => {

    it('The form should have a input with a entry for name"', () => {
        const { container } = render(<Provider store={store}> <BrowserRouter><App/><NewPokemon/></BrowserRouter></Provider>)
        const element = container.querySelectorAll('input')[0]
        expect(element.type).toBe('text');
      });
  
      it('The form shpuld have a input with a entry for text and image', () => {
        const { container } = render(<Provider store={store}> <BrowserRouter><App/><NewPokemon/></BrowserRouter></Provider>)
        const element = container.querySelectorAll('input')[1]
        expect(element.type).toBe('text');
      });

})