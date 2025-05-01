const personaServiceHasUserMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
		hasUser: personaServiceHasUserMock
  }
}));

import { modelValidatorUserId } from "@app-ag/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorUserId.positive
 *
 * A positive test for modelValidatorUserId where personaService.hasUser
 * (from '@datr.tech/leith-common-services') is mocked above, using personaServiceHasUserMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe( "modelValidatorUserId", () => {
	describe("positive", () => {
		test("should not throw an error when the underlying personaService (mocked) returns true", async () => {
			/*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { userId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			await modelValidatorUserId(docMock, nextMock);

			/*
       * Assert
       */
		  expect( personaServiceHasUserMock ).toHaveBeenCalledTimes(1);
      expect( personaServiceHasUserMock ).toHaveBeenCalledWith(expect.objectContaining({ userId: idMock }));
			expect(nextMock).toHaveBeenCalledTimes(1);
		});
	});
}); 
