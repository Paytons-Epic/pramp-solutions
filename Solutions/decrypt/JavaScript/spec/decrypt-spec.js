//#!javascript
// spec/test-spec.js

with_index = require("../decrypt_with_index"),
with_iterator = require("../decrypt_with_iterator"),
with_single_map = require("../decrypt_single_map"),
with_multi_map = require("../decrypt_multi_map"),

describe("decrypt", function () {
    var cases;

    beforeEach(function() {
        cases = [
            ["dnotq","crime"],
        ]
    });

    describe("with_index", function () {
        it("should pass all test cases", function() {
            for (const case_ of cases) {
                expect(with_index.decrypt(case_[0])).toBe(case_[1]);
            }
        });
    });

    describe("with_iterator", function () {
        it("should pass all test cases", function() {
            for (const case_ of cases) {
                expect(with_iterator.decrypt(case_[0])).toBe(case_[1]);
            }
        });
    });

    describe("with_single_map", function () {
        it("should pass all test cases", function() {
            for (const case_ of cases) {
                expect(with_single_map.decrypt(case_[0])).toBe(case_[1]);
            }
        });
    });

    describe("with_multi_map", function () {
        it("should pass all test cases", function() {
            for (const case_ of cases) {
                expect(with_multi_map.decrypt(case_[0])).toBe(case_[1]);
            }
        });
    });
});
