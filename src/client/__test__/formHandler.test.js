import {postData} from '../js/formHandler'
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests

describe("Testing the submission feature", () => {
    test("Testing the handleSubmit()", () => {
        const url = "https://reaction.life/khans-low-emission-zone-is-a-public-health-contradiction-ulez/";
        return postData('http://localhost:9000/test', {text: url}).then((data) => {expect(data.subjectivity).toBe("OBJECTIVE")});
    })
})