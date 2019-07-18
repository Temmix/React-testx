import * as brandService from "./brandService";

describe("Brand service", () => {
  const brandId = "413dad6e-bdd8-405e-b107-511c075a7d5e";
  it("Calling the Get service", done => {
    const promisedData = {
      BrandName: "Santander-PCA",
      Id: "f2c0191b-afdd-442e-b0df-d3f041550326",
      PublicationDate: "2019-02-15",
      MeasurementPeriodStartDate: "2018-10-01",
      MeasurementPeriodEndDate: "2018-12-31"
    };

    spyOn(brandService, "get").and.returnValue(Promise.resolve(promisedData));

    brandService.get(brandId).then(data => {
      expect(data.Id).toEqual(promisedData.Id);
      expect(data.BrandName).toEqual(promisedData.BrandName);
      expect(data.PublicationDate).toEqual(promisedData.PublicationDate);
      expect(data.MeasurementPeriodStartDate).toEqual(
        promisedData.MeasurementPeriodStartDate
      );
      expect(data.MeasurementPeriodEndDate).toEqual(
        promisedData.MeasurementPeriodEndDate
      );
      done();
    });
    expect(brandService.get).toBeCalledWith(brandId);
    expect(brandService.get).toBeCalledTimes(1);
  });

  it("Calling the Update service", done => {
    const updatedBrand = {
      BrandName: "Santander-PCA",
      Id: "f2c0191b-afdd-442e-b0df-d3f041550326",
      PublicationDate: "2019-02-15",
      MeasurementPeriodStartDate: "2018-10-01",
      MeasurementPeriodEndDate: "2018-12-31"
    };

    spyOn(brandService, "update").and.returnValue(
      Promise.resolve({ status: 200 })
    );
    brandService.update(brandId, updatedBrand).then(data => {
      expect(data.status).toEqual(200);
      done();
    });
    expect(brandService.update).toBeCalledWith(brandId, updatedBrand);
    expect(brandService.update).toBeCalledTimes(1);
  });

  it("Calling the Sign-off service", done => {
    spyOn(brandService, "signOff").and.returnValue(
      Promise.resolve({ status: 204 })
    );
    brandService.signOff(brandId).then(data => {
      expect(data.status).toEqual(204);
      done();
    });
    expect(brandService.signOff).toBeCalledWith(brandId);
    expect(brandService.signOff).toBeCalledTimes(1);
  });

  it("Calling the Revert service", done => {
    spyOn(brandService, "revert").and.returnValue(
      Promise.resolve({ status: 204 })
    );
    brandService.revert(brandId).then(data => {
      expect(data.status).toEqual(204);
      done();
    });
    expect(brandService.revert).toBeCalledWith(brandId);
    expect(brandService.revert).toBeCalledTimes(1);
  });
});
