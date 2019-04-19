import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";

describe("sample scenario", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should find an element by text", async () => {
        console.log("Hello there");
        const btnTap = await driver.findElementByAutomationText("Ter Stegen");
        await btnTap.click();

        const message = "Ter Stegen";
        const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
        
        // Image verification
        // const screen = await driver.compareScreen("hello-world-41");
        // assert.isTrue(screen);
    });

    it("should find an element by type", async () => {
        console.log("Hello there 2");
        // const btnTap = await driver.findElementByClassName(driver.locators.button);
        // await btnTap.click();

        // const message = " taps left";
        const lblMessage = await driver.findElementByAutomationText("Ter Stegen", 10000);
        // assert.equal(await lblMessage.text(), "40" + message);
    });
});