/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { ConfigUtil, PathService, NO_USERNAME_MSG } from '../../../src';
import { workspaceUtils } from '../../../src/workspaces';

describe('pathService Unit Tests.', () => {
  const fakeRootWorkspacePath = '/this/is/a/path';
  const fakeUserName = 'fake@auser.com';

  let getRootWorkspacePathSpy: jest.SpyInstance;
  let getUsernameSpy: jest.SpyInstance;
  beforeEach(() => {
    getRootWorkspacePathSpy = jest
      .spyOn(workspaceUtils, 'getRootWorkspacePath')
      .mockReturnValue(fakeRootWorkspacePath);

    getUsernameSpy = jest
      .spyOn(ConfigUtil, 'getUsername')
      .mockResolvedValue(fakeUserName);
  });

  describe('getMetadataDirectory()', () => {
    const expectedMetadataDir = `${fakeRootWorkspacePath}/.sfdx/orgs/${fakeUserName}/metadata`;
    it('Should be able to get the metadata directory.', async () => {
      const path = await PathService.getMetadataDirectoryPath();
      expect(path).toEqual(expectedMetadataDir);
      expect(getRootWorkspacePathSpy).toHaveBeenCalled();
      expect(getUsernameSpy).toHaveBeenCalled();
    });

    it('Should throw if no username is configured.', async () => {
      getUsernameSpy.mockResolvedValue(undefined);
      await expect(async () => {
        await PathService.getMetadataDirectoryPath();
      }).rejects.toThrowError(NO_USERNAME_MSG);
    });
  });
});
