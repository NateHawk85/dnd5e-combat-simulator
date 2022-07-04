![Build Status](https://github.com/NateHawk85/dnd5e-combat-simulator/actions/workflows/run_tests_on_push.yml/badge.svg)

![Latest Release Download Count](https://img.shields.io/github/downloads/natehawk85/dnd5e-combat-simulator/latest/dnd5e-combat-simulator.zip?color=2b82fc&label=Downloads%20(latest)&style=for-the-badge)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fdnd5e-combat-simulator&colorB=blueviolet)](https://forge-vtt.com/bazaar#package=dnd5e-combat-simulator)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnatehawk85%2Fdnd5e-combat-simulator%2Fmain%2Fstatic%2Fmodule.json&label=Current%20Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange&style=for-the-badge)

## DEV NOTES
- `game.combats.combats[0]` --> First open [BaseCombat](https://foundryvtt.com/api/documents.BaseCombat.html) object (everything below assumes you have the correct BaseCombat)
- `.turns` --> Array<[Combatant](https://foundryvtt.com/api/Combatant.html)>
- `.data` --> [CombatData](https://foundryvtt.com/api/data.CombatData.html)