const model = require("../models/model");
const connect = require("../lib/connect");

jest.mock("../lib/connect");

beforeEach(() => {
  connect.mockClear();
});

test("mock test", done => {
  connect.mockImplementation(() => {
    return {
      search: () => {
        return { data: 123 }
      }
    };
  });

  model.show().then(data => {
    const response = {
      data: { data: 123 },
      count: 1
    };
    expect(data).toEqual(response);
    expect(connect).toHaveBeenCalledTimes(1);
    done();
  });
});
