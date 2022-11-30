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