/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { step } from 'mocha-steps';
import {
  ScratchOrg
} from '../ScratchOrg';

describe('Functions', async () => {
  let scratchOrg: ScratchOrg = undefined;

  step('Set up the testing environment', async () => {
    scratchOrg = new ScratchOrg('Functions', false);
    await scratchOrg.setUp();
  });

  step('Java Functions', async () => {
    step('Create a Java function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Start Java function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Stop Java function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Start Java function in container', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Stop Java function in container', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });
  });

  step('JavaScript Functions', async () => {
    step('Create a JavaScript function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Start JavaScript function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Stop JavaScript function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Start JavaScript function in container', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Stop JavaScript function in container', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });
  });

  step('TypeScript Functions', async () => {
    step('Create a TypeScript function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Start TypeScript function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Stop TypeScript function', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Start TypeScript function in container', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });

    step('Stop TypeScript function in container', async () => {
      // TODO: implement
      expect(1).toBe(1);
    });
  });

  step('Tear down and clean up the testing environment', async () => {
    await scratchOrg.tearDown();
  });
});