var DeclarativForms = require('./../../src/project_name.js');

describe('declarativ-forms', () => {
    it('is a constructor function', () => {
        var obj = new DeclarativForms();
        expect(obj).not.toBeNull();
    });
});
