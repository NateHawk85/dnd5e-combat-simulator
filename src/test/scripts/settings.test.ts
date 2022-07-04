import * as Settings from '../../main/scripts/settings';
import * as MockedSettingsUtils from '../../main/scripts/settings-utils';

jest.mock('../../main/scripts/settings-utils');
const SettingsUtils = jest.mocked(MockedSettingsUtils, true);

describe('registerModuleSettings', () =>
{
	test('WHEN called THEN calls SettingsUtils.registerSettings', () =>
	{
		Settings.registerModuleSettings();

		expect(SettingsUtils.registerSettings).toHaveBeenCalled();
	});

	test('WHEN called THEN calls SettingsUtils.registerMenus', () =>
	{
		Settings.registerModuleSettings();

		expect(SettingsUtils.registerMenus).toHaveBeenCalled();
	});
});