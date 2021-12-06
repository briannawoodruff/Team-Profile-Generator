const Manager = require('../lib/Manager');

const lori = new Manager("Lori", "2", "lori@email.com", "25");

describe('Manager Class', () => {
    it('should return the properties sent through the manager class', () => {
        expect(lori.name).toBe("Lori");
        expect(lori.id).toBe("2");
        expect(lori.email).toBe("lori@email.com");
        expect(lori.officeNumber).toBe("25");
    });
});

describe('Manager getOfficeNumber', () => {
    it('should return the officeNumber', () => {
        expect(lori.getOfficeNumber()).toBe(lori.officeNumber);
    });
});