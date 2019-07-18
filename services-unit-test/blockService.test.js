import * as blockService from "./blockService";

describe("Block service", () => {
  const brandId = "413dad6e-bdd8-405e-b107-511c075a7d5e";
  const blockId = "f8637e2e-9f6f-4039-bb4b-9373d6790077";
  it("Calling the Get service", done => {
    const promisedData = {
      BlockName: "Service Matter Availability",
      Id: "f2c0191b-afdd-442e-b0df-d3f041550326",
      PublicationDate: "2019-02-15",
      MeasurementPeriodStartDate: "2018-10-01",
      MeasurementPeriodEndDate: "2018-12-31"
    };

    spyOn(blockService, "get").and.returnValue(Promise.resolve(promisedData));

    blockService.get(brandId, blockId).then(data => {
      expect(data.Id).toEqual(promisedData.Id);
      expect(data.BlockName).toEqual(promisedData.BlockName);
      expect(data.PublicationDate).toEqual(promisedData.PublicationDate);
      expect(data.MeasurementPeriodStartDate).toEqual(
        promisedData.MeasurementPeriodStartDate
      );
      expect(data.MeasurementPeriodEndDate).toEqual(
        promisedData.MeasurementPeriodEndDate
      );
      done();
    });
    expect(blockService.get).toBeCalledWith(brandId, blockId);
    expect(blockService.get).toBeCalledTimes(1);
  });

  it("Calling the Update service", done => {
    const updatedBlock = {
      BlockName: "Service Matter Availability",
      Id: "f2c0191b-afdd-442e-b0df-d3f041550326",
      PublicationDate: "2019-02-15",
      MeasurementPeriodStartDate: "2018-10-01",
      MeasurementPeriodEndDate: "2018-12-31"
    };

    spyOn(blockService, "update").and.returnValue(
      Promise.resolve({ status: 200 })
    );
    blockService.update(brandId, blockId, updatedBlock).then(data => {
      expect(data.status).toEqual(200);
      done();
    });
    expect(blockService.update).toBeCalledWith(brandId, blockId, updatedBlock);
    expect(blockService.update).toBeCalledTimes(1);
  });

  it("Calling the Sign-off service", done => {
    spyOn(blockService, "signOff").and.returnValue(
      Promise.resolve({ status: 204 })
    );
    blockService.signOff(brandId, blockId).then(data => {
      expect(data.status).toEqual(204);
      done();
    });
    expect(blockService.signOff).toBeCalledWith(brandId, blockId);
    expect(blockService.signOff).toBeCalledTimes(1);
  });
});
