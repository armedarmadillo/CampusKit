'use strict';

describe('About', function() {
    beforeEach(function() {
        browser().navigateTo('/');
    });

    describe('about yo', function() {
        it('should give basic information about the app', function() {
            expect(true.toBe(true));
        });
    });
});