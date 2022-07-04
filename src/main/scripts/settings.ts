import * as SettingsUtils from './settings-utils';

export function registerModuleSettings(): void
{
	SettingsUtils.registerSettings();
	SettingsUtils.registerMenus();
}