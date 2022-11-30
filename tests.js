// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane" when executed', function(){
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex" when executed', function(){
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat" when executed', function(){
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return "Hello, World" when executed with nothing', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World" when executed with true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World" when executed with false', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, null" when executed with null', function(){
        expect(sayHello(null)).toBe("Hello, null!");
    });
    it('should return "Hello, !" when executed with a blank string', function(){
        expect(sayHello('')).toBe("Hello, !");
    });
    it('should return "Hello, array!" when executed with an array', function(){
        expect(sayHello(['a', 2, 8])).toBe("Hello, array!");
    });
});

describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function() {
        expect(isFive('5')).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should always return true when ran with 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should always return true when ran with -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should always return false when ran with 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should always return false when ran with "banana"', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should always return true when ran with "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should always return false when ran with Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should always return false when ran with true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should always return false when ran with false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should always return false when ran with nothing', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function(){
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
})