/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {
    TextEditor
} from 'wdio-vscode-service';
import * as utilities from '../utilities';

export async function createApexClassWithTest(name: string): Promise<void> {
    const workbench = await browser.getWorkbench();
    let textEditor: TextEditor;

    // Using the Command palette, run SFDX: Create Apex Class to create the main class
    const inputBox = await utilities.runCommandFromCommandPrompt(workbench, 'SFDX: Create Apex Class', 1);

    // Set the name of the new Apex Class
    await inputBox.setText(name);
    await inputBox.confirm();

    // Select the default directory (press Enter/Return).
    await inputBox.confirm();
    await utilities.pause(1);

    // Modify class content
    const editorView = workbench.getEditorView();
    textEditor = await editorView.openEditor(name + '.cls') as TextEditor;
    await textEditor.setText('public with sharing class ' + name + ' {\n\tpublic static void SayHello(string name){\n\t\tSystem.debug(\'Hello, \' + name + \'!\');\n\t}\n}');
    await textEditor.save();
    await textEditor.toggleBreakpoint(3);
    await utilities.pause(1);

    // Using the Command palette, run SFDX: Create Apex Class to create the Test
    await utilities.runCommandFromCommandPrompt(workbench, 'SFDX: Create Apex Class', 1);

    // Set the name of the new Apex Class Test
    await inputBox.setText(name + 'Test');
    await inputBox.confirm();

    // Select the default directory (press Enter/Return).
    await inputBox.confirm();
    await utilities.pause(1);

    // Modify class content
    textEditor = await editorView.openEditor(name + 'Test.cls') as TextEditor;
    await textEditor.setText('@isTest\npublic class ' + name + 'Test {\n\t@isTest\n\tstatic void validateSayHello() {\n\t\tSystem.debug(\'Starting validate\');\n\t\t' + name + '.SayHello(\'Cody\');\n\t\tSystem.assertEquals(1, 1, \'all good\');\n\t}\n}');
    await textEditor.toggleBreakpoint(6);
    await textEditor.save();
    await utilities.pause(1);

    // Push source to scratch org
    await utilities.runCommandFromCommandPrompt(workbench, 'SFDX: Push Source to Default Scratch Org and Override Conflicts', 1);
    await utilities.pause(1);
}

export async function createAnonymousApexFile(): Promise<void> {
    const workbench = await browser.getWorkbench();
    let textEditor: TextEditor;
    const editorView = workbench.getEditorView();

    // Using the Command palette, run File: New File...
    const inputBox = await utilities.runCommandFromCommandPrompt(workbench, 'Create: New File...', 1);

    // Set the name of the new Anonymous Apex file
    await inputBox.setText('Anonymous.apex');
    await inputBox.confirm();
    await inputBox.confirm();
    textEditor = await editorView.openEditor('Anonymous.apex') as TextEditor;

    await textEditor.setText('System.debug(\'¡Hola mundo!\');');
    await textEditor.save();
    await utilities.pause(1);
}