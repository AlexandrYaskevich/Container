import ErrorRepository from '../classerror';

test('test error', () => {
    const error = new ErrorRepository();
    const result = 'Parse error';
    expect(error.translate("32700")).toEqual(result);
  });

  test('test error', () => {
    const error = new ErrorRepository();
    
    expect(error.translate("00000")).toThrow("Unknown error");
  });