import { HeightPipe } from './height.pipe';

describe('HeightPipe', () => {
  const pipe = new HeightPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('format height less than 1 m', () => {
    const formatedHeigth = pipe.transform(9);
    expect(formatedHeigth).toMatch('0,9 m');
  });

  it('format height between 1 m and 10 m', () => {
    const formatedHeigth = pipe.transform(55);
    expect(formatedHeigth).toMatch('5,5 m');
  });

  it('format height greater than 10 m', () => {
    const formatedHeigth = pipe.transform(991);
    expect(formatedHeigth).toMatch('99,1 m');
  });
});
