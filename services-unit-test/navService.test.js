import * as navService from "./navService";

describe("Navigation service", () => {
  it("Calling the getNavigations service", done => {
    const navList = ["Santander-PCA", "Cahoot", "Santander-BCA", "Cater-Allen"];
    spyOn(navService, "getNavigations").and.returnValue(
      Promise.resolve({ nav: navList })
    );

    navService.getNavigations().then(data => {
      expect(data.nav.length).toEqual(4);
      expect(data.nav).toContain("Santander-PCA");
      done();
    });
    expect(navService.getNavigations).toBeCalled();
    expect(navService.getNavigations).toBeCalledTimes(1);
  });
});
