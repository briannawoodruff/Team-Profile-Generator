const Engineer = require('../lib/Engineer');

const pat = new Engineer ("Pat", "3", "pat@email.com", "patgithub");

describe('Engineer Class', () => {
    it('should return the properties sent through the engineer class', () => {
        expect(pat.name).toBe("Pat");
        expect(pat.id).toBe("3");
        expect(pat.email).toBe("pat@email.com");
        expect(pat.github).toBe("patgithub");
    });
});

describe('Engineer getGithub', () => {
    it('should return the github', () => {
        expect(pat.getGithub()).toBe(pat.github);
    });
});