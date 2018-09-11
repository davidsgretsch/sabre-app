import React from 'react';
import { FilterForm }  from './FilterForm';
import { shallow } from 'enzyme';

describe('FilterForm', () => {
  let filterForm;
  const handleSubmitMock = jest.fn();

  beforeEach(() => {
    filterForm = shallow(<FilterForm applyFilterAction={handleSubmitMock} />);
  });

  describe('component methods', () => {
    let instance;
    beforeEach(() => {
      instance = filterForm.instance();
    });

    describe('handleInput', () => {
      const event = {
        target: {
          name: 'namePlayer',
          value: 'Zlatan Ibrahimovic'
        }
      };

      beforeEach(() => {
        instance.handleInput(event);
      });

      it('should update component state with event data', () => {
        expect(filterForm.state('namePlayer')).toEqual('Zlatan Ibrahimovic');
      });
    });

    describe('handleSubmit', () => {
      const state = {
        namePlayer: 'Zlatan Ibrahimovic',
        positionPlayer: 'Centre-Forward',
        agePlayer: 36
      };

      beforeEach(() => {
        filterForm.setState(state);
        filterForm.instance().handleSubmit();
      });

      it('should update component state with event data', () => {
        expect(handleSubmitMock).toHaveBeenCalledTimes(1);
        expect(handleSubmitMock).toHaveBeenCalledWith(state);
      });
    });
    
  });
});
