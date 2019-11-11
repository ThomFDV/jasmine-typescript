'use strict';

import User from "../src/index";

describe("testing the user class", function() {
    let user1 = new User("toto@toto.toto", "toto", "tata", 22);
    let user2 = new User("tata@tata", "tata", "tutu", 22);

    it("a user should be created", () => {
        expect(User).toBeDefined();
    });
    it("create a user and check its infos", () => {
        expect(user1.firstname).toBe("toto");
    });
    it("the user1 should be valid", () => {
        expect(user1.isValid()).toBe(true);
    });
    it("the user2 should not be valid", () => {
        expect(user2.isValid()).toBe(false);
    });
});