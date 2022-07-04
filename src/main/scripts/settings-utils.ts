import * as SettingsUtils from './settings-utils';
import SimulationConfiguration from "../classes/SimulationConfiguration";

export const MODULE_ID = 'dnd5e-combat-simulator';
export const TEMPLATES_PATH = `modules/${MODULE_ID}/templates`;
const DATA_VERSION_SETTING = 'dataVersion';
const SIMULATION_CONFIGURATIONS_SETTING = 'simulationConfigurations';

/**
 * Registers settings for the module. This is only meant to be called on initial game load.
 */
export function registerSettings(): void
{
	game.settings.register(MODULE_ID, DATA_VERSION_SETTING, {
		name: 'Data Version',
		default: 0,
		type: Number,
		scope: 'world'
	});
}

/**
 * Registers menus for the module. This is only meant to be called on initial game load.
 */
export function registerMenus(): void
{
}

/**
 * Registers an API for the current module, accessible by `game.modules.get(MODULE_ID).api.*function()*`. This is meant to be called only on initial game load.
 * @param {Record<string, Function>} api - The API to expose.
 * @returns {void}
 */
export function registerAPI(api: Record<string, Function>): void
{
	// @ts-ignore - Not recognized due to Foundry object
	game.modules.get(MODULE_ID)!.api = api;
}

/**
 * Reloads the current window.
 * @returns {void}
 */
export function reloadWindow(): void
{
	window.location.reload();
}

/**
 * Resets all settings to their default values. WARNING: Doing this leads to unrecoverable data loss.
 */
export async function resetAllSettings(): Promise<void>
{
	return SettingsUtils.reloadWindow();
}

// ---------------------------------------- Settings Getters/Setters ----------------------------------------

export function getDataVersion(): number
{
	return <number> game.settings.get(MODULE_ID, DATA_VERSION_SETTING);
}

export function setDataVersion(dataVersion: number): Promise<number>
{
	return game.settings.set(MODULE_ID, DATA_VERSION_SETTING, dataVersion);
}

export function getSimulationConfigurations(): SimulationConfiguration[]
{
	return <SimulationConfiguration[]> game.settings.get(MODULE_ID, SIMULATION_CONFIGURATIONS_SETTING);
}

export async function setSimulationConfigurations(simulationConfigurations: SimulationConfiguration[]): Promise<SimulationConfiguration[]>
{
	return await game.settings.set(MODULE_ID, SIMULATION_CONFIGURATIONS_SETTING, simulationConfigurations);
}