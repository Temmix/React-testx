import * as roleService from "./roleService";

describe("Role service", () => {
  it("Calling the getNavigations service", done => {
    const roleList = ["SQM-READ", "SQM-WRITE", "SQM-SIGN-OFF", "SQM-ADMIN"];
    spyOn(roleService, "getRoles").and.returnValue(
      Promise.resolve({ roles: roleList })
    );

    roleService.getRoles().then(data => {
      expect(data.roles.length).toEqual(4);
      expect(data.roles).toContain("SQM-READ");
      done();
    });
    expect(roleService.getRoles).toBeCalled();
    expect(roleService.getRoles).toBeCalledTimes(1);
  });
});
