const entityServiceHasResourceMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  entityService: {
    hasResource: entityServiceHasResourceMock,
  },
}));

import { modelValidatorResourceId } from '@app-ag/api/modelValidators/foreign';
import { Types } from 'mongoose';

describe('modelValidatorResourceId', () => {
  describe('positive', () => {
    test('should not throw an error when the underlying entityService (mocked) returns true', async () => {
      /*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { resourceId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      await modelValidatorResourceId(docMock, nextMock);

      /*
       * Assert
       */
      expect(entityServiceHasResourceMock).toHaveBeenCalledTimes(1);
      expect(entityServiceHasResourceMock).toHaveBeenCalledWith(
        expect.objectContaining({ resourceId: idMock }),
      );
      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});
