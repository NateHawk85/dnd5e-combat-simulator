import * as SettingsUtils from '../../main/scripts/settings-utils';
import * as Constants from '../config/constants';
import {when} from "jest-when";

const MODULE_NAME = 'dnd5e-combat-simulator';
const SIMULATION_CONFIGURATIONS_SETTING = 'simulationConfigurations'
const DATA_VERSION_SETTING = 'dataVersion';

describe('registerSettings', () =>
{
	test('WHEN called THEN the "Data Version" setting is registered with "0" saved by default', () =>
	{
		SettingsUtils.registerSettings();

		expect(game.settings.register).toHaveBeenCalledWith(MODULE_NAME, DATA_VERSION_SETTING, {
			name: 'Data Version',
			default: Constants.DEFAULT_DATA_VERSION,
			type: Number,
			scope: 'world'
		});
	});

	test('WHEN called THEN only registers as many times as there are settings', () =>
	{
		SettingsUtils.registerSettings();

		expect(game.settings.register).toHaveBeenCalledTimes(1);
	});
});

describe('registerMenus', () =>
{

});

describe('registerAPI', () =>
{
	test.each([
		[{name: () => console.log('Something'), exampleCall: () => console.log('Hello!')}],
		[{
			someFunctionA: () => [], someFunctionB: () =>
			{
			}
		}]
	])
	('WHEN called THEN registers the API under the module\'s ID: %s', (value) =>
	{
		const mockAPI = {};
		// @ts-ignore
		game.modules.set(MODULE_NAME, mockAPI);

		SettingsUtils.registerAPI(value);

		// @ts-ignore
		expect(game.modules.get(MODULE_NAME)!.api).toStrictEqual(value);
	});
});

describe('reloadWindow', () =>
{
	test('WHEN called THEN calls window.location.reload', () =>
	{
		SettingsUtils.reloadWindow();

		expect(window.location.reload).toHaveBeenCalled();
	});
});

describe('resetAllSettings', () =>
{
	test('WHEN called THEN calls SettingsUtils.reloadWindow', () =>
	{
		jest.spyOn(SettingsUtils, 'reloadWindow');

		SettingsUtils.resetAllSettings();

		expect(SettingsUtils.reloadWindow).toHaveBeenCalled();
	});
});

describe('Settings', () =>
{
	describe('Data Version', () =>
	{
		describe('getDataVersion', () =>
		{
			test('WHEN called THEN calls game.settings.get with setting name', () =>
			{
				SettingsUtils.getDataVersion();

				expect(game.settings.get).toHaveBeenCalledWith(MODULE_NAME, DATA_VERSION_SETTING);
			});

			test.each([Constants.DEFAULT_DATA_VERSION, 2, 5])
			('WHEN called THEN returns what game.settings.get returns: %s', (value) =>
			{
				when(game.settings.get).calledWith(MODULE_NAME, DATA_VERSION_SETTING).mockReturnValue(value);

				const dataVersion = SettingsUtils.getDataVersion();

				expect(dataVersion).toStrictEqual(value);
			});
		});

		describe('setDataVersion', () =>
		{
			test.each([Constants.DEFAULT_DATA_VERSION, 2, 5])
			('WHEN called THEN calls game.settings.set with setting name: %s', (value) =>
			{
				SettingsUtils.setDataVersion(value);

				expect(game.settings.set).toHaveBeenCalledWith(MODULE_NAME, DATA_VERSION_SETTING, value);
			});

			test.each([Constants.DEFAULT_DATA_VERSION, 2, 5])
			('WHEN called THEN returns what game.settings.set returns: %s', (value) =>
			{
				when(game.settings.set).calledWith(MODULE_NAME, DATA_VERSION_SETTING, value).mockReturnValue(Promise.resolve(value));

				const actual = SettingsUtils.setDataVersion(value);

				expect(actual).toStrictEqual(Promise.resolve(value));
			});
		});
	});

	describe('SimulationConfigurations', () =>
	{
		describe('getSimulationConfigurations', () =>
		{
			test('WHEN called THEN calls game.settings.get with setting name', () =>
			{
				SettingsUtils.getSimulationConfigurations();

				expect(game.settings.get).toHaveBeenCalledWith(MODULE_NAME, SIMULATION_CONFIGURATIONS_SETTING);
			});

			test.each([
				[[Constants.DEFAULT_SIMULATION_CONFIGURATION]],
				[[Constants.DEFAULT_SIMULATION_CONFIGURATION, Constants.SECONDARY_SIMULATION_CONFIGURATION]]
			])
			('WHEN called THEN returns what game.settings.get returns: %s', (value) =>
			{
				when(game.settings.get).calledWith(MODULE_NAME, SIMULATION_CONFIGURATIONS_SETTING).mockReturnValue(value);

				const profiles = SettingsUtils.getSimulationConfigurations();

				expect(profiles).toStrictEqual(value);
			});
		});

		describe('setSimulationConfigurations', () =>
		{
			test.each([
				[[Constants.DEFAULT_SIMULATION_CONFIGURATION]],
				[[Constants.DEFAULT_SIMULATION_CONFIGURATION, Constants.SECONDARY_SIMULATION_CONFIGURATION]]
			])
			('WHEN called THEN calls game.settings.set with setting name: %s', (value) =>
			{
				SettingsUtils.setSimulationConfigurations(value);

				expect(game.settings.set).toHaveBeenCalledWith(MODULE_NAME, SIMULATION_CONFIGURATIONS_SETTING, value);
			});

			test.each([
				[[Constants.DEFAULT_SIMULATION_CONFIGURATION]],
				[[Constants.DEFAULT_SIMULATION_CONFIGURATION, Constants.SECONDARY_SIMULATION_CONFIGURATION]]
			])
			('WHEN called THEN returns what game.settings.set returns: %s', (value) =>
			{
				when(game.settings.set).calledWith(MODULE_NAME, SIMULATION_CONFIGURATIONS_SETTING, value).mockReturnValue(Promise.resolve(value));

				const actual = SettingsUtils.setSimulationConfigurations(value);

				expect(actual).toStrictEqual(Promise.resolve(value));
			});
		});
	});
});