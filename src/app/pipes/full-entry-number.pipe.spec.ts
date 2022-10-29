import { FullEntryNumberPipe } from './full-entry-number.pipe';

describe('FullEntryNumberPipe', () => {
  const pipe = new FullEntryNumberPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format entryNumber between 0 and 9', () => {
    const formatedNumber = pipe.transform(2);
    expect(formatedNumber).toMatch('#002');
  });

  it('should format entryNumber between 10 and 99', () => {
    const formatedNumber = pipe.transform(99);
    expect(formatedNumber).toMatch('#099');
  });

  it('should format entryNumber greater than 99', () => {
    const formatedNumber = pipe.transform(100);
    expect(formatedNumber).toMatch('#100');
  });
});
