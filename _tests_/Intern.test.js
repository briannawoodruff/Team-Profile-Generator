const Intern = require('../lib/Intern');

const jen = new Intern ("Jen", "4", "jen@email.com", "Northwestern");

describe('Intern Class', () => {
    it('should return the properties sent through the engineer class', () => {
        expect(jen.name).toBe("Jen");
        expect(jen.id).toBe("4");
        expect(jen.email).toBe("jen@email.com");
        expect(jen.school).toBe("Northwestern");
    });
});

describe('Intern getSchool', () => {
    it('should return the school', () => {
        expect(jen.getSchool()).toBe(jen.school);
    });
});