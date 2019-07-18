import * as authService from "./authService";

describe("Authentication service", () => {
  it("Calling the Login service", () => {
    spyOn(authService, "login").and.returnValue(true);
    const username = "E1120200";
    const password = "password";
    const response = authService.login(username, password);
    expect(response).toBeTruthy();
    expect(authService.login).toBeCalledTimes(1);
    expect(authService.login).toBeCalledWith(username, password);
  });

  it("Calling the Logout service", () => {
    spyOn(authService, "logout").and.returnValue(null);
    authService.logout();
    expect(authService.logout).toBeCalled();
    expect(authService.logout).toBeCalledTimes(1);
  });

  it("Get Admin user", () => {
    const currentUser = { name: "Temi Makinde", isAdmin: true };
    spyOn(authService, "getCurrentUser").and.returnValue(currentUser);
    const user = authService.getCurrentUser();
    expect(authService.getCurrentUser).toBeCalled();
    expect(authService.getCurrentUser).toBeCalledTimes(1);
    expect(user.isAdmin).toBeTruthy();
    expect(user.name).toBe("Temi Makinde");
  });

  it("Get Current User not Admin", () => {
    const currentUser = { name: "Temi Makinde", isAdmin: false };
    spyOn(authService, "getCurrentUser").and.returnValue(currentUser);
    const user = authService.getCurrentUser();
    expect(authService.getCurrentUser).toBeCalled();
    expect(authService.getCurrentUser).toBeCalledTimes(1);
    expect(user.isAdmin).toBeFalsy();
    expect(user.name).toBe("Temi Makinde");
  });

  it("Calling isViewer service", () => {
    spyOn(authService, "isViewer").and.returnValue(true);
    const response = authService.isViewer();
    expect(authService.isViewer).toBeCalled();
    expect(authService.isViewer).toBeCalledTimes(1);
    expect(response).toBeTruthy();
  });
});
