import { toggle } from './Accordion';

describe('Accordion toggle', () => {
  it('should set expanded to true if Accordion was collapsed', () => {
    expect(toggle({ expanded: false })())
      .toEqual({ expanded: true });
  });

  it('should set expanded to false if Accordion was expanded', () => {
    expect(toggle({ expanded: true })())
      .toEqual({ expanded: false });
  });
});
