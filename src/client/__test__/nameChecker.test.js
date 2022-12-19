import { checkForName } from "../js/nameChecker";

describe("Testing name checker feature", () => {
    test("Testing the checkforName()", () => {
        Object.defineProperty(global, "window", {
            value: {
                alert: jest.fn()
            }
        });
        expect(checkForName("url")).toBe(false);
    });
})