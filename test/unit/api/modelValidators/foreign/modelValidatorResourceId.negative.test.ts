const entityServiceHasResourceMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  entityService: {
		hasResource: entityServiceHasResourceMock
  }
}));

import { modelValidatorResourceId } from "@app-ag/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorResourceId.negative
 *
 * A negative test for modelValidatorResourceId where entityService.hasResource
 * (from '@datr.tech/leith-common-services') is mocked above, using entityServiceHasResourceMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe( "modelValidatorResourceId", () => {
	describe("negative", () => {
		test("should throw the expected error when the underlying entityService (mocked) returns false", async () => {
			/*
       * Arrange
       */
			const errorExpected = "resourceId: invalid";
      const idMock = new Types.ObjectId();
      const docMock = { resourceId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			const handler = async () => {
				await modelValidatorResourceId(docMock, nextMock);
			};

			/*
       * Assert
       */
			await expect(handler()).rejects.toThrowError(errorExpected);
		  expect( entityServiceHasResourceMock ).toHaveBeenCalledTimes(1);
		  expect( entityServiceHasResourceMock ).toHaveBeenCalledWith(expect.objectContaining({ resourceId: idMock }));
			expect(nextMock).not.toHaveBeenCalled();
		});
	});
}); 
