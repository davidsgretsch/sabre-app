import * as constants from '.';

describe('constants', () => {
  it('should match snapshot', () => {
    expect(constants).toMatchSnapshot();
  });
});
