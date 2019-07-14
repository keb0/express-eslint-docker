const model = require("../models/model");
const connect = require("../lib/connect");

jest.mock("../lib/connect");
const mockFn = jest.fn();
connect.mockImplementation(() => {
  return {
    search: mockFn
  };
});

beforeEach(() => {
  connect.mockClear();
});

test("mock test", done => {
  mockFn.mockResolvedValue({
    body: {
      hits: {
        hits: [
          {
            _source: {
              data: 123
            }
          }
        ],
        total: {
          value: 123
        }
      }
    }
  });

  expect(connect).toHaveBeenCalledTimes(0);

  model.show().then(data => {
    const response = {
      data: {data: 123},
      count: 123
    };
    expect(data).toEqual(response);
    expect(connect).toHaveBeenCalledTimes(1);
    done();
  });
});
