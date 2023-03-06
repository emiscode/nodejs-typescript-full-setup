"use strict";
exports.__esModule = true;
var src_1 = require("../src");
describe('test', function () {
    test('pass', function () {
        var name = src_1["default"].name;
        expect(name).toBe('Emilio');
    });
});
