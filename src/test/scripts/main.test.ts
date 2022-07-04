import * as Settings from '../../main/scripts/settings';
import * as API from '../../main/scripts/api';

// Necessary to tie function references to main.ts function references... may be an issue with Jest
const registerSettings = () => {};
const registerApi = () => {};

jest.mock('../../main/scripts/settings', () => ({
    registerSettings: registerSettings
}));
jest.mock('../../main/scripts/api', () => ({
    registerApi: registerApi
}));

test('WHEN main.ts is run THEN module-profile settings are registered', () =>
{
    require('../../main/scripts/main');

    expect(Hooks.once).toHaveBeenCalledWith('ready', Settings.registerModuleSettings);
});

test('WHEN main.ts is run THEN the API is registered', () =>
{
    require('../../main/scripts/main');

    expect(Hooks.once).toHaveBeenCalledWith('ready', API.registerApi);
});