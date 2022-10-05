/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Global } from '@salesforce/core';
import { join } from 'path';
import { ConfigUtil } from '../config/configUtil';
import { workspaceUtils } from '../workspaces';

export const NO_USERNAME_MSG =
  'No current username found for getting the metadata directory path.';

const getSfdxDirectoryPath = () => {
  return join(workspaceUtils.getRootWorkspacePath(), Global.SFDX_STATE_FOLDER);
};

const getMetadataDirectoryPath = async () => {
  const username = await ConfigUtil.getUsername();
  if (!username) {
    throw new Error(NO_USERNAME_MSG);
  }
  return join(getSfdxDirectoryPath(), 'orgs', username, 'metadata');
};

export const PathService = {
  getMetadataDirectoryPath
};
