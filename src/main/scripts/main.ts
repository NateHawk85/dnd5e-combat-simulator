import * as Settings from './settings';
import * as API from './api';

// Module setup
Hooks.once('ready', Settings.registerModuleSettings);
Hooks.once('ready', API.registerApi);