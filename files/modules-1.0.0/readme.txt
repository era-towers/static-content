ERA: Electronic Roleplaying Assistant
Copyright © 2005-2025 Maximiliano Tabacman. All rights reserved.

Iron Crown Enterprises, I.C.E., ICE, Rolemaster, High Adventure Role Playing, HARP, Spacemaster, Cyberspace, and Bladelands - and all products related thereto - are all trademark and copyright 2002-2025 © properties of Iron Crown Enterprises Ltd, 37 Fulbourn Road, Cambridge, United Kingdom. All rights reserved.

Navigator RPG, Nav RPG, and Open Ended Role-Playing is copyright 2019-2025 Parts Per Million Limited.

Against the Darkmaster - The Classic Game of Fantasy Adventure is a trademark of Open Ended Games, Inc. Copyright © 2016–2025, Open Ended Games, Inc and their respective authors.

====== Version History =====

>> 2025-02-02

- Player rolls for iniative, maneuvers, spell casting and attacks can now be applied in the Adventuring module.

- Added checkboxes next to the search in the Gaming Table module, to indicate all skills/developed only, and include/exclude skill descriptions when searching.

- Added option to filter only table name (usually its category) of skills, or spell lists of spells, using the at sign @.

- Results in the top search bar of the Gaming Table module are now grouped by category for skills, and by spell list for spells. Clicking on the group will use it for a new search.

- Skill and spell tables in the Gaming Table module are now grouped by category for skills, and by spell list for spells.

- The culture step in the Character Creation module will now group skills with specializations, and compact them by default

- Added suggested description for newly created characters.

- Added generative description of adventure combatants.

- Added interpreted verbal command for gaming table actions.

- Added option to roll for initiative and combat skills in the Gaming Table module. These options have also been added to the filter on the top search bar.

- The new Summon button on the Adventuring module allows importing characters from another adventure into the current one, along with their status.

- New character profiles added to an adventure can indicate the group size, to add several identical profiles at once.

- RMU: Initiative can now be rolled at once for all combatants.

- Fixed: critical severities below maximum will now suggest the minimum severity instead of the maximum.

- Fixed: Map distance calculation in the Travel module is now working again in Chromium/Opera.

>> 2024-12-08

- Character profiles in the Adventuring module can be replaced, to help transition during level ups or using updated versions of the character files.

- Treasure tables can now roll dice other than d100, by reading the highest value in the last row.

- Fixed: avatars for files with non-alphanumeric chars, or located outside the /Characters directory, and creature templates, are once again visible.

- Fixed: attack tables with decimal values can now be shown in the Treasure module.

>> 2024-12-01

- Greatly improved loading times for Adventuring and Gaming Table modules when characters have large image files for avatars.

- Fixed: Messages to players will no longer be kept when a new adventure is started or loaded.

- Fixed: Discarding changes in the party inventory will no longer remove the items brought from the individual inventories.

>> 2024-10-31

- The Gaming Table module now offers a more compact view of the selected hero companions when the party is large (more than 5 PCs in total).

- The Gaming Table module will no longer show hero NPCs in the companion sidebar.

- Adventure and character loading times improved by preventing multiple reads of the race and profession files.

- Additional logging information for the online server.

- Added loading notification to round start, next/previous action declaration, new adventure, restore/continue adventure

- Fixed: choosing a saved roll will again count as entering the roll manually for event triggering.

- Fixed: loading an RMU adventure with no heroes is now working as expected.

>> 2024-10-24

- Initial version of the Gaming Table module.

- Maneuver dialogs in the Adventuring module will now show also show skills classified as Offensive Bonus and Special Maneuver.

- Skill filters in Adventuring, Character Status and Gaming Table modules can now be configured to consider the skill description.

- Skill filters in Adventuring, Character Status and Gaming Table modules now allows using + to separate different conditions that must all be met.

- Most skill and spell filters will now wait for 3 characters before performing the search.

- Spell list filter now allows using + to separate different conditions that must all be met, and | to separate alternative filters.

- Added option to filter beginning of spell name, using the caret ^ as separator.

- The injury recovery dialog now includes a field to indicate additional modifications to the recovery roll.

- The injury recovery dialog is now also available from the character recovery dialog.

- Racial description will now be observe the paragraph separation used in the configuration files.

- RMU: Knack bonus of new characters can be any number and not just a multiple of 5. Older characters must manually edit their professionBonus indicating knackBonus.bonusPerRank as the value (for example "5.1" for a knack of +5 and +1 per rank developed).

- RMU: Added partial medicine success to the recovery types, and clarified that no medicine maneuver is the same as a failure.

- Fixed: Movement Maneuver table resolution will no longer apply the difficulty adjustment, since that is already considered in the different columns.

- Fixed: Ranks gained per purchase field in the Character Sheet module will now allow decimal numbers.

- Fixed: Characters can now detail values for Player Kept Records added after they were created.

>> 2024-08-28

- Fixed: Copying a character with custom defensive modifications is available again.

>> 2024-08-19

- VsD: Skills and vocational spell lores will now indicate their stat in the vocation step of the Character Creation module.

>> 2024-08-16

- All race important information will now be included in starting character notes.

- Culture name will now be included in starting character notes.

- Character profiles with no avatar will now show the character name.

- Repeated character profiles with an avatar will now show a number to distinguish between them.

- Creature profiles indicating a number in the attackQuickness tag (instead of a code) will have that value as their initiative.

- Creature profiles can now indicate a list of defensive modifications, which will be active by default.

- Individual maneuvers can now indicate increase/decrease of hits, bleeding, exhaustion, stun and modifications.

- Exhaustion/fatigue penalties will now be considered automatically.

- Exhaustion/fatigue can now be diminished and increased as a result of spell casting.

- Exhaustion/fatigue can now be increased as a result of criticals, fumbles and spell failures.

- Exhaustion/fatigue will now be relieved automatically during recovery periods.

- Slight redesign in recovery period visual and logging.

- RMU: Characters, profiles and creature templates can now indicate a size adjustment when being the target of an attack, which affects damage multiplier and critical adjustment.

- RMC/RMFRP: Exhaustion will now be increased as a result of melee, missile, concentration and movement action declarations.

>> 2024-06-16

- Added customization option to choose which combatants are shown when declaring actions.

- Creature profiles added to an adventure will now save their name and category, so the basic information can be restored when loading a saved adventure file.

- Character and profile combat skills allow indicating a collection of range modifications.

- Attacks allow indicating a distance, from the ranges available to the skill. If the skill does not declare ranges, the options default to that of the attack table.

- Added button to check spells in lists available during training package purchase.

- Race important information lines starting with • will be included in starting character notes.

- Fixed: Creatures and NPCs will now consider level based resistances in their total bonus.

- Fixed: Installing a custom file will now completely overwrite it if it already existed.

- RMU: Variant professions can now use modifier="0" for the SkillCategoryCostModifier and SkillsCostModifier tags to indicate they should be excluded from the professional skills, if they were included for the base profession.

- RMU: Creature skills are considered for defensive modifications.

- RMU: Piecemeal armor is now supported for attacks, the roll to indicate location is also used in case of a critical.

- RMU: Critical reduction when severity is below A will now automatically lookup the lower results to the same location.

- VsD: Combat skills declared during character creation can now indicate base range, which will automatically be translated into range modifications.

>> 2024-04-08

- Added support for maneuver tables related to skills.

- The filter in the Treasure module will now search in any part of the table name.

>> 2024-04-02

- Added random roller in Character Status module. Number rolled will be added to the character saved rolls.

- Added carrier filter to party inventory module.

- Added support for multiple file uploading in the Customization Module.

- Redesigned saved rolls dialog to allow random and manual selection.

- Skill glossary files that mention ignored skills will no longer be skipped.

- Added Vocabulary.XML to allow configuration of words used in certain parts of the application.

>> 2024-02-20

- Added spell failures and fumbles as random tables to the Treasure module.

- Added option to filter beginning of skill name, using the caret ^ as separator.

- Removed failure button from spell casting dialog, will now be automatically opened when the casting fails.

- Added role check (GM / Player) in the online server.

- RuleSettings.XML is no longer part of the default installation, so that changes are not lost when updating.

- Fixed: VsD weapon attacks declared during character creation will now show the stat and vocation bonus of the base skill.

>> 2024-01-17

- Added spell list filter to spell casting skills of character profiles in the Adventuring module.

- Added climate and locale columns to herbs table.

- Foraging module will not offer filters nor columns that have only one option.

- Added button to download adventures, summaries, party inventories and characters from the customization module.

- Changed the delete button in the customization module to allow removing multiple files at once.

- Available characters offered in the adventuring and character sheet module will now be displayed in alphabetical order, then in ascending level order.

- Fixed: removing a well known skill will not block the UI after informing that it is not allowed.

- Fixed: adding an already existing skill will now inform that it is not allowed.

- Fixed: RMU will now allow accessing the injury recovery dialog for NPCs.

>> 2023-12-06

- Spell Lists now include a category, which is used to filter names for spell castings skills.

- Force spell dialog now includes a detail on the result calculation components.

- Map distance calculator in the Travel module.

- Map for Travel Module is now stored independently for each ruleset in the Adventures directory.

- Added option to ask for several skill name filters at once, using the pipe | as separator.

- Added search feature to the Treasure module table selection.

- Fixed: herb codes will be interpreted as case-insensitive and unknown codes will be notified.

- RMC/RMFRP/RMU: New characters will offer open and closed spell lists in the corresponding skill category.

>> 2023-09-17

- Variant races can be included in the Races directory to be offered during character creation.

- Added customization module.

- Added support for base 64 avatars in Creature files.

- Added notifications to wait after uploading files and before server restarts.

- Fixed: negative resistance special bonus will now be loaded correctly.

- Fixed: non-UM rolls on force spells will be once again restricted to giving non-UM results, regardless of the total.

- Fixed: character profile tooltip will be once again updated as the status changes (stun, bleeding, hits).

- Fixed: choosing an attack table with parenthesis during character creation will ignore them when suggesting the name for the attack skill, to prevent it from being interpreted as a specialization.

- Fixed: having a character file without level in its name will no longer prevent loading characters by name using the load query.

- RMFRP: resistance against hybrid spells will now correctly apply the full value of the same realm bonus.

>> 2023-08-11

- Changes to support the online server.

- Redesigned loading notification. Added loading notification to more actions. Greyed out buttons during server processing in the Character Creation module.

- Removed storage of new avatars in the /Resources/Avatars directory to prepare for Base64 images of Creature files. 

- Fixed: changing custom rules will now correctly restart the system.

- Fixed: creatures can now resist against hybrid spells.

>> 2023-07-01

- Added warning when using an out of date version. The check is on by default, and can be configured using option "checkForUpdates".

- Improved attacks step during character creation to ensure selections and suggest a skill name when possible.

- Fixed: user defined skill glossaries will now correctly override those from book packages.

- RMU: Updated spell failure columns to match Spell Law.

>> 2023-06-06

- Added skill glossaries, to include description and common situational modifiers.

- Added button when editing a skill in the character sheet module, which opens a dialog with the corresponding skill glossary entry.

- Redesign of the maneuver resolution dialog, which now offers a manual roll modifier, lists all modifiers affecting the roll, and displays the skill glossary entry.

- Made skills in the character status module clickable, to open a dialog with the corresponding skill glossary entry.

- Modified loading of all packages to allow reporting conflicting files. Conflicts can be resolved by manually prefixing the package files with a number indicating loading priority.

- Added link to allow receiving PayPal donations.

- RMU: Added list of body area steps when resolving criticals below severity A, to help manual adjustment of results.

- VsD: Corrected Assassination to be a Static Maneuver instead of a Special Maneuver, so it can be rolled in the Adventuring module.

- Fixed: character profile attacks, maneuvers and spell lists in the Adventuring module will once again be shown after adding/removing them.

- Fixed: combat skills marked as favorite without a fumble range will default to 2, so they can be shown on the printable character sheet.

- Fixed: aborting a level up will now correctly refresh the inventory tab to the items declared before the level up was started.

>> 2023-04-22

- Added total carried weight, weight penalty and casting penalties to the inventory tab of the Character Sheet module.

- Character profile maneuvers and spells are now listed alphabetically.

- Total movement is listed next to the movement modification in the Character Sheet module.

- Added REST API allowing query of attack tables, available on port 8888 by default, configurable using option "restAPIListeningPort"

- Added sizeAdjustment option for creature attacks to the creature XML format.

- New option offerConferenceFeatures in settings to enable/disable the Jitsi Meet button on the Adventuring and Character Status modules.

- Show/Hide status of the How to Use in the Character Creation module will now be remembered for new characters.

- Maneuvers, attacks and criticals can now be queried from the Treasure module as static tables.

- RMU: Variant professions will now show the professional skill options during character creation.

- RMU: Professional knack and bonus to spellcasting categories now indicate they only apply to spell mastery.

- VsD: Removed weight section of the inventory tab in the Character Status module.

>> 2023-03-07

- Modified load and save buttons in the Character Sheet module to make them easier to use.

- Fixed: Defensive modifications with negative values will now be offered in the attack dialog.

- Fixed: RMC/RMFRP/RMU/Navigator negative quickness will now correctly result in a negative DB.

>> 2023-02-18

- Creature templates now include a category, which is used in available packages to indicate its origin (Creatures, Shadow World, etc.)

- Added category and level filters when choosing creatures to add in the Adventuring module.

- Added server option "directory" to specify a different ruleset location, which allows tracking different campaigns with the same ruleset. Must be a directory next to the original ruleset directories provided, the name can't contain spaces or special characters. For example in Windows run: cmd /C Server\\ERA-Server.exe Server\\ERA-Server.dat launchpad start --settings-file=Server\\ERA-Settings.ini ERA --ruleset=RMU --directory=AnotherUnified

- Fixed: RMFRP subterfuge attack table can now be accessed again.

>> 2023-01-02

- Added maximum result and critical columns to favorite attacks in the printable character sheet.

- In the printable character sheet, a favorite attack with +0 item bonus will now be shown as an empty string. When all favorite attacks have +0 item bonus the column will not be shown.

- Fixed: RMC movement speeds when loading creatures are now the expected ones from Creatures and Treasures, instead of always considering RMFRP initiative bonus.

- Fixed: Starting a new round when creatures and NPCs are involved is working again.

>> 2022-12-24

- New server dialog

- Fixed: RMC and RMFRP initiative now ignore penalties/modifications, but consider the correct adjustment when wounded.

>> 2022-11-28

- Added option to create an attack skill based on any existing skill in the Character Sheet module.

- Added a tooltip detailing the result related to the numbers shown when inspecting a spell in the Character Status module.

- Improved skill update dialog in the Character Sheet module.

- All character skills are now available as binding options.

- Creatures templates can now indicate fixed resistance bonuses.

- Creature attacks can optionally indicate maximum table result and fixed critical type.

- Fixed: accepting the adventure loading/continue dialogs without choosing any adventure will now show an alert.

- Fixed: filtering new ranks during level up after purchasing ranks in a category will now show the expected result.

- Fixed: default foraging formula will now correctly round down after dividing instead of rounding off.

- Fixed: Movement of creatures in rulesets that use meters will be correctly displayed and considered.

- Fixed: Shadow World herbs can now be selected when using the default foraging formula.

>> 2022-10-10

- Added option to indicate a fixed critical dealt by skills categorized as offensive bonus.

- Added option to indicate maximum result obtained by skills categorized as offensive bonus.

- Removed default critical type from attack tables.

- Fixed map selection in Travel module.

- Roll sequences now interpret 00 as 100, and ignore spaces in the comma separated string.

- Critical tables can now contain UM rows.

- Plus symbol shown as prefix of strictly positive bonuses.

- Added tooltip explaining automatic bonus included in the special bonus column.

- Added printable character sheet skill filter option to show all skills.

- Added adventure video conference link in Adventuring and Character Status module.

- Added support for player kept records.

- Visual redesign of Culture step during character creation.

- Visual redesign of Profession step during character creation.

- Professional bonus can now also be specified for individual skills.

- Improved adventure file name for easier identification.

- Corrected printable character sheet file name when character name contains invalid symbols.

>> 2022-04-14

- RMFRP: Fixed realm stat, corrects stat bonus for power point development and spell casting categories.

>> 2022-02-17

- Added Training Package support, including specials that are added to the inventory, ranks and stat gains.

- Cancelling a level up will also reset manual changes to stats and skills made since starting the level up.

- Fixed: ignored skills mentioned in a new character's profession, race or culture will no longer be included in the character sheet.

- RMC: Fixed stats used for Acrobatics

>> 2021-05-25

- Moved groups/categories/skills to directories, improving customization of new entries and allowing to ignore the defaults provided.

- Added category bonus to race XML format.

>> 2021-05-02

- RMC: Fixed issue that was prevented characters from being created.

- RMFRP: Removed automatic binding between Stalk and Hiding.

>> 2021-04-22

- Added home button to adventuring, treasure, character sheet and character creation modules.

- Spell casting skills now offer a selection of installed spell lists instead of a text field when entering their name.

- Added detail of computation components during an attack.

- Combat skills that do not indicate an attack table will now use a table named like the skill if one is available.

- Corrected professional skill bonus column name in the printable character sheet.

- Added explanation to N/A results in attack dialog.

- Redesign of culture step in character creation. Improvement of language step style to match.

- Added customization option to choose professional bonuses interpretation: based on character level, based on skill ranks or fixed at first level.

- RMFRP: Redesign of hobby ranks step in character creation.

>> 2021-02-23

- Races, professions and cultures now include a category, which is used in available packages to indicate its origin (Character Law, Essence Companion, etc.)

- Base spell lists can be customized during character creation

- RMC: Added spell gain section in post level up dialog.

- RMC: Prevented rolled hit points to remain after aborting a level up, when ranks were purchased without enough development poins.

>> 2021-02-10

- Each Rolemaster ruleset now presents its own image instead of sharing the RMFRP logo for all of them.

- Custom rules that apply to specific ruleset are not presented for those that do not use them.

- Character status allows computing custom movements by changing distance, pace and percentage.

- Variant professions can be included in the Professions directory to be offered during character creation.

- Profession costs for custom weapon categories will now be equal to the highest weapon category cost for the profession.

- Races can now specify a size adjustment that will be applied when creating a character.

- Attack tables now support incomplete armor columns, so damage can be define only for some of the available armor types.

- RMFRP: Corrected typo in Adrenal Toughness skill name.

>> 2020-10-24

- Added customization option to keep parry declaration percentage and adjustment instead of resetting after each attack.

- Races can now specify a stride modifier.

- Power point recovery multiplier will now be considered in the printable character sheet.

- RMFRP: Races can define power point progression for custom realms.

>> 2020-09-07

- Attacks with a skill that does not declare an attack table will be ignored.

- When multiple book packages include a repeated spell list name, the tie can now be broken by declaring an XML file for that spell list, in whic case it will take priority over all versions in the packages.

>> 2020-09-01

- Removed fumble and critical buttons from attack dialog. The corresponding dialog will appear once the attack is accepted.

- Added defaults to creature file format to ease creation of quick NPCs.

- Renamed Active Spell to Active Effect

- RMC: Corrected formula to determine unconsciousness due to excessive stun.

>> 2020-07-31

- Changed initial table in Treasure Generator to Treasure Code.

- Added default cost option to categories.

- RMFRP: Added default cost to Crafts, and all categories in the Technical/Trade group.

- RMFRP: Fixed double culture ranks on character creation.

>> 2020-07-27

- Added descriptions to professions, which will be listed in the corresponding step during character creation.

>> 2020-07-04

- RMC: Hit points obtained by dice rolled are now saved when the level up is completed.

- Navigator: Corrected Physique and Psionic Power to ensure both give rank bonus.

>> 2020-06-26

- Navigator: first release.

- Added option to configure hits and power points detail in the Character Status module.

>> 2020-01-21

- ERA is now offered as a 64 bit application for Windows, MacOS and Linux.

>> 2020-01-06

- RMFRP: New custom categories can now be added without preventing existing professions from being used.

>> 2019-12-22

- Added injury recovery multiplier for all races.

- Aded injury recovery multiplier for characters, defaulting to the race multiplier.

- Added injury recovery dialog, accesible from critical damage, weapon fumble and spell failure.

- The default CSS for the printable character sheet can now be edited at ERA/Server/Resources/printableCharacterSheet.css

- Fixed: Critical resolution for NPCs is correctly saved and loaded during adventures.

- Fixed: Casting cost modifier now also affects automatic spell casting.

- Fixed: Expiration of spells adding a modification to a character during an adventure now corretly removes the modification.

- RMFRP: Corrected maneuver types for skills in the Special Attacks category.

- RMFRP: Added missing skills for new characters.

>> 2019-08-04

- RMFRP: Fixed purchasing category ranks for characters with Excellent Memory

- RMFRP: Rename Warrior Mage base list Spell Defense to Spell Defenses, in order to avoid overlap with Channeling open list.

>> 2019-04-07

- Maneuver skills and spells lists for PCs and NPCs can be configured in the Adventuring Module.

- Added skills at 0 bonus for all categories in NPCs and creatures.

- Creature templates can now indicate maneuver skills, spell lists and power points per level.

- Character avatar in the printable character sheet is now always set to 100x100 pixels.

- Mac: Corrected size of widgets in attack dialog.

>> 2018-10-20

- Added option in Adventuring module to load characters from a local file. They will be saved to the Adventures directory to ensure they are loaded when restoring saved adventures.

- Maneuver difficulties for the ruleset can now be configured by editing /Configuration/ManeuverDifficulties.XML

- Skill stats can now be changed on a per-character basis in the Character Sheet module. The stat bonus obtained will be in addition to any stat bonus in the category.

- When creating NPCs in the Adventuring module the level can now be specified.

- RMFRP: Added missing maneuver tables (Athletic-Endurance, Special Attacks, Special Defenses)

>> 2018-08-06

- Added roll to logged attacks, RRs, spell casting in the Adventuring module.

>> 2018-06-17

- Professions can now declare costs for skills not included in the default system skill list, and they will be added to new characters of that profession.

- Fixed: number of ranks and rank bonus for categories that can be developed are now shown on the printable character sheet.

- Fixed: spell effects can once again cause damage if a negative value is entered.

- RMU: Fixed length in rounds of minutes and rounds during recovery.

>> 2018-04-08

- Added spells in list button to spell casting skill rows in the Character Sheet module.

- Added character power point recovery multiplier.

- Updated installation instructions to provide download link for the base product.

- Added ServerPort as optional parameter to configuration files. Default is 7777.

- Fixed: The pace multiplier in the movement dialog supports both integer and decimal numbers.

- Fixed: Recovering Hits and PP's when already over the maximum total does no longer reduce them to the maximum total.

- RMC: Changed stat bonus and power point calculations to keep increasing after 102 (RMC Companion I Section 4.8, Option 2).

- RMC: Fixed stat bonus for stats below 21.

- RMFRP: Corrected hits and power points recovery formula to consider the stats calculation used in the rule set.

>> 2018-01-13

- Initial treasure module.

- Added detail of all profession spells during character creation.

- Made attacks cancel targeting mode after choosing a target, instead of after completing the attack.

- Changed movement during combat to be based on feet instead of hexes.

- Improved support for regional Unicode scripts (using UTF-8).

- Fixed: RMC armor rank bonus progression will give +5 even after 10 ranks.

>> 2017-08-13

- New attack dialog.

- New spell casting dialogs.

- New spell book module, accesible from the character status module.

- New characters are created with default Height (6') and Weight (185 lbs).

- Added spell generic spell casting bonus to character abilities.

- Dialogs can now be accepted by pressing Enter.

- Fixed: characters with items in the personal inventory will now be correctly loaded.

>> 2017-05-13

- Changed sample creatures and added attack tables to support their attacks.

- Added small and large party styles in Adventuring module.

- Fixed: House rules will now be correctly saved when using the corresponding dialog.

- RMFRP: Added flaws to packages containing talents.

>> 2017-03-27

- Improved explanation to users when an invalid package file is installed.

- Improved creature selection filter.

- Added generic creature avatar when adding a new creature.

- Fixed: RMFRP customization with new skills in new categories no longer prevents new characters from being created.

- Fixed: Modifying amount of a carried item now correctly modifies existing item.

- Fixed: Fumble range of creature attacks will default to that of the attack table used.

- Fixed: Renamed generic avatars to improve Linux compatibility.

- Fixed: Same realm RR bonus for hybrid casters will now be used against all of their realms, instead of only against the exact realm combination.

- Fixed: RMFRP resistance against hybrid basic spell attacks will now sum realm stats bonus, instead of averaging 3x realm stats bonus.

- Fixed: Unix-based OS will now correctly load an adventure containing a non player character.

>> 2017-01-21

- Added individual character inventory to the character sheet module.

- Added inventory filter in character status module. Will search for item name, effect and description.

- Redesigned party inventory interface.

- Realms can now specify their casting penalties and basic attack columns.

- Improved description of weight and spell casting penalties in character status module.

- Improved spells filters. All spell filters will search input in spell name, then description, then list name. With * as an input, only instantaneous spells will be shown.

- Fixed: Prevented a negative parry from adding to the attack total.

- Fixed: Active spells from a single casting no longer share remaining duration.

- Fixed: Transcend Armor positive bonus will no longer be considered when skill is not developed.

- Fixed: RMFRP hybrid power point progression will now use the lower realm progression instead of averaging.

- Fixed: RMFRP hybrid RR's will now sum realm stats bonus instead of averaging 3x realm stats bonus.

>> 2016-11-26

- Added detail of support e-mail and forum thread when informing errors.

- Mac: improved support when starting on Sierra.

>> 2016-11-06

- Fixed Inventory module

- Unix/Mac: improved behavior when closing server.

>> 2016-10-25

- Added race special bonuses with automatic specialization binding.

- Added extra stat gain option during level up.

- Added perception penalty to armor.

- Improved armor composition dialog to show only the columns relevant to the ruleset.

- Modified herbs location to allow multiple files.

- Added herb finding formula to ruleset customization (based on Difficulty, based on frequency).

- RMU: Character creation improvements.

>> 2016-08-13

- Fixed: Recovered Everyman/Occupational/Restricted development modifiers when creating new characters.

- Added: Support for Base64 image in Races and Professions.

>> 2016-07-08

- Fixed: added how to use text in the combat style creation step.

>> 2016-06-30

- Fixed: typos in maneuvers, criticals, background options and spell descriptions.

- New foraging module design

- New Herald module design

- Added support for Combat Companion armor by the piece, criticals by weapon and combat styles.

- Added Shadow World criticals to Shadow World package.

- RMC: Added total activity during action declaration.

>> 2016-02-28

- Fixed: Development points are computed after stat gains.

- Fixed: Background options total can be changed manually during character creation.

- Added missile and quickness bonus to armor.

- Added Background Options and Creatures to Installed Component dialog.

- Added Support Log updated when AJAX request fails.

- Added Creatures as NPC.

- RMFRP: Swapped combat costs are considered when assigning hobby ranks.

- RMFRP: Disabled potential increase during stat gains.

>> 2016-01-20

- RMFRP: Skill categories no longer lose professional bonus when assigning hobby ranks.

>> 2016-01-08

- Fixed: Selecting affordable skills after purchasing spell lists at ranks with cost change no longer block level up process.

- Fixed: Roll adjustment in criticals is no longer lost when target has critical reduction.

- Fixed: The last potential set when the list reaches the bottom of the page can now be properly selected.

- Added messages to the critical window notifying when severity and/or roll have been adjusted.

- Added buttons after saving a new character: create new character and go back to module selection.

- Added default table name to martial arts skills.

- Added Character Development History to Character Sheet Module (Replaces individual Level Up files).

- Added Random d100 button to Roll fields.

- Added Background Option Table Summary during Character Creation.

- Added Random d100 button to Stat Gains Dialog during level up.

- Added multiple target selection during spell casting.

- RMC: Added filter buttons for Primary and Secondary skills during level up.

- RMC: Added rolls of Background Options.

- RMC: Added post level up dialog to enter Body Development increase.

>> 2015-09-27

- Added Shadow World logo for use during race selection of Shadow World character creation.

- RMFRP: Hobby ranks can now be assigned to skill categories.

>> 2015-09-13

- Fixed: expiring active spells no longer block character recovery.

>> 2015-08-31

- Fixed duplicated skills in loaded characters.

>> 2015-08-28

- New Feature: Rules customization dialog. Accesible from the about dialog.

- New Feature: Exhaustion Points. They can be tracked for each adventurer, and start with a vale determined by the ruleset in use.

- Added maneuver resolution table selection to the maneuver dialog in the Adventuring Module.

- Added character size category.

- Added size adjustment and fumble for combat skills in the Adventuring Module.

- Improved support for adding custom groups, categories and skills.

- Fixed: RMC temporary validations during character creation now allow a roll of 20.

- Fixed: RMFRP hobby ranks can now be spent only when the cost is below 40.

- RMFRP: Body Development and Power Point Development progressions can now be edited in the character sheet XML.

- RMU: Added damage and critical adjustment due to size difference.

>> 2015-07-11

- Added Race Talent Points.

- Added Character Remaining Development Points.

- Added Combat Style Fumble and Size Adjustment during character creation.

- RMU: Sample Professions, Cultures, Races, Talents, Flaws, Attack Tables, Criticals, Spells.

>> 2015-06-13

- Added Large and Super Large Criticals.

- Added cultures for RMFRP

- Added filters to the background option step in the character creation module.

- Added character avatar to the character file (Base64).

- Improved spell filter in the character status module.

- Improved remaining activity calculation during round action declarations.

- Fixed: Quickness penalty added to the armor detail in the character sheet module.

- Fixed: copied existing adventurers no longer link to the original ones.

- Fixed: better rounding for inventory item weights.

- Fixed: RMFRP maneuver and spell text corrections

>> 2015-05-09

- Added checbox to show all herbs.

- Added edition of development modifier for skills: Restricted (0.5), Everyman (2), Occupational (3)

- Changed Stalk/Hide binding to apply only on character creation, instead of forcing it when loading.

- Fixed: RMFRP casting penalties for armor have been corrected.

- Fixed: ERA-RMC and ERA-RMFRP executable files for Windows have been improved to be compatible with more versions of Windows.

>> 2015-03-31

- Added start up failure notifications.

- Added Character Notes to Printable Character Sheet.

- Added support for ruleset specific images on races and professions.

- Reorganized directory structures and added different startUp links for each ruleset.

- Optimized performance in adventures involving many characters for many rounds.

>> 2015-02-03

- Added RMFRP static maneuver tables for Urban and Martial Arts - Combat Maneuvers skill categories.

- Added sample XML static maneuver tables for RMFRP.

- Fixed: Layout of party recovery dialog for different browsers.

- Fixed: RMFRP realm stat bonus is now correctly averaged for hybrid spell users.

- Fixed: RMFRP stride adjustment will correctly triple the Quickness bonus.

>> 2015-02-02

- Fixed: Characters with height 0 can now access the stats tab of the character status module.

>> 2015-02-01

- Fixed: Fumbles now correctly apply to the attacker instead of the defender.

- Fixed: Rolling a 100 during the RMC stat gain step while leveling up is not ignored anymore.

- New feature: Custom Profession. The character creation module allows to change realm and prime stats after choosing a profession.


>> 2015-01-23

- About Box includes a list of installed components (races, professions, spell lists, attack tables, critical tables, fumble columns).

- New feature: Fumbles. Attack dialog will now notify the need to roll for fumble. The new fumble dialog offers all types defined, and logs the result after rolling.

- RMFRP: Fixed DB due to Quickness.

- RMFRP: Fixed declared actions sequence.

- Improved clarification of units expected for height and weight in the character sheet module.

- Changed skill table resolution from text field to combo box in character sheet module. Offensive skills will offer the installed attack tables as options.

>> 2015-01-14

- First version of the travel module (Strategic Movement).

- Pressing ENTER while editing a row in the character sheet will apply changes and quit edit mode.

- Last herb in the foraging module is no longer hidden by the bottom bar.

- Fixed RMFRP stat bonuses table.

- Added "How to use" box for RMFRP Stat Generation step during character creation.

- Fixed access to the Character Herald.

>> 2014-12-29

- Developed and positive filters (and the HTML character sheet) should now show skills with bindings.

>> 2014-12-25

- Option to fix number of DP. If you open the "ERA-Settings.conf" file, you can add a line to override the default RMC formula for development points and replace it with a fixed number. 
For example:
DevelopmentPointsFormula = 50
will give characters 50 DPs per level, regardless of their stats.

- You can now determine a "Rank Binding" when editing skills and defenses.
To indicate that the number of ranks in a character skill is determined by the number of ranks in another skill: (1) load the character sheet, (2) click on the edit icon to the left of the skill name, (3) click on the cog icon that is first to the right of the skill, (4) open the Rank Binding field and choose the name of the skill that will determine the number of ranks.
Note that once a skill is configured to work this way, you will not be allowed to change its number of ranks, nor spend DPs on it during level up. You can always choose the first option ("No binding") to restore it to the normal behavior.
To indicate that a defense depends on the number of ranks in a skill: (1) load the character sheet, (2) click on the shield icon to the right of the defensive bonus, (3) click Add/Edit, (4) open the Rank Binding field and choose the name of the skill that will determine the base bonus, (5) enter the multiplier in the Bonus/Ratio field.

- "How to use" box, which accompanies the user during character creation. It offers explanations and tips at each step of the process.