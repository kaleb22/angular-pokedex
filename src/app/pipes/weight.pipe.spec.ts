import { WeightPipe } from './weight.pipe';

describe('WeightPipe', () => {
  const pipe = new WeightPipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format weight less than 1 kilo', () => {
    const formatedWeight = pipe.transform(7);
    expect(formatedWeight).toMatch('0,7 kg');
  });

  it('should format weight between 1 kilo and 9,9', () => {
    const formatedWeight = pipe.transform(22);
    expect(formatedWeight).toMatch('2,2 kg');
  });

  it('should format weight between 10 kilo and 99', () => {
    const formatedWeight = pipe.transform(220);
    expect(formatedWeight).toMatch('22,0 kg');
  });

  it('should format weight greater than 1000 kilo', () => {
    const formatedWeight = pipe.transform(1000);
    expect(formatedWeight).toMatch('0.10 t');
  });
});
