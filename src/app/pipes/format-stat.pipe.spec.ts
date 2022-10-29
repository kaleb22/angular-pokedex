import { pipe } from 'rxjs';
import { FormatStatPipe } from './format-stat.pipe';

describe('FormatStatPipe', () => {
  const pipe = new FormatStatPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format stat number between 0 and 9', () => {
    let formatedNumber = pipe.transform(1);
    expect(formatedNumber).toMatch('001');
  });

  it('should format stat number between 10 and 99', () => {
    let formatedNumber = pipe.transform(52);
    expect(formatedNumber).toMatch('052');
  });
});
