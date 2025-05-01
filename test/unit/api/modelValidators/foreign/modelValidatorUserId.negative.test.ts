const personaServiceHasUserMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
    hasUser: personaServiceHasUserMock,
  },
}));

import { modelValidatorUserId } from '@app-ag/api/modelValidators/foreign';
import { Types } from 'mongoose';

describe('modelValidatorUserId', () => {
  describe('negative', () => {
    test('should throw the expected error when the underlying personaService (mocked) returns false', async () => {
      /*
       * Arrange
       */
      const errorExpected = 'userId: invalid';
      const idMock = new Types.ObjectId();
      const docMock = { userId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      const handler = async () => {
        await modelValidatorUserId(docMock, nextMock);
      };

      /*
       * Assert
       */
      await expect(handler()).rejects.toThrowError(errorExpected);
      expect(personaServiceHasUserMock).toHaveBeenCalledTimes(1);
      expect(personaServiceHasUserMock).toHaveBeenCalledWith(
        expect.objectContaining({ userId: idMock }),
      );
      expect(nextMock).not.toHaveBeenCalled();
    });
  });
});
