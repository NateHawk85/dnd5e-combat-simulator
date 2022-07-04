import * as Settings from './settings';
import * as SettingsUtils from './settings-utils';

/**
 * Registers the module's API. This is only meant to be called on initial game load.
 */
export function registerApi()
{
	const api = {

	};

	SettingsUtils.registerAPI(api);
}