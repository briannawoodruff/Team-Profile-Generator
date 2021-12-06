const Employee = require('../lib/Employee');

const brianna = new Employee("Brianna", "1", "brianna@email.com");

describe('Employee Class', () => {
    it('should return the properties sent through the employee class', () => {
        expect(brianna.name).toBe("Brianna");
        expect(brianna.id).toBe("1");
        expect(brianna.email).toBe("brianna@email.com");
    });
});

describe('Employee getName', () => {
    it('should return the properties sent through the employee class', () => {
        expect(brianna.getName()).toBe(brianna.name);
    });
});

describe('Employee getId', () => {
    it('should return the properties sent through the employee class', () => {
        expect(brianna.getId()).toBe(brianna.id);
    });
});

describe('Employee getEmail', () => {
    it('should return the properties sent through the employee class', () => {
        expect(brianna.getEmail()).toBe(brianna.email);
    });
});