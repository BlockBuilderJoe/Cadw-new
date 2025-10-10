import { world, system, BlockPermutation } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { giveBookToPlayer } from "./books.js";

let overworld = world.getDimension("overworld");

function getScore(score, objective) {
  const scoreBoard = world.scoreboard.getObjective(objective);
  if (scoreBoard) {
    return scoreBoard.getScore(score);
  }
  return 0;
}

// Quest begin function with delayed dialogue change
export function questBegin() {
  // Teleport player first
  overworld.runCommand(`tp @p -40311 -14 -40033 facing -40307 -14 -40033`);

  // Wait for chunks to load, then change dialogue (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=taliesindavNPC] taliesindavNPC3`);
  }, 20);
}

// Idris quest function with delayed dialogue change
export function idrisQuest() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 idris_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40342 -10 -39878 facing -40342 -10 -39875`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=idrisquestNPC] idrisquestNPC1`);

    overworld.runCommand(`tickingarea remove idris_area`);
  }, 20);
}

// Dissolution function with delayed dialogue change
export function dissolution() {
  // Add ticking area to ensure distant NPCs are loaded
  overworld.runCommand(`tickingarea add -40400 -20 -39920 -40370 0 -39890 cadwgan_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40384 -10 -39908 facing -40384 -10 -39905`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=cadwganNPC,x=-40384,y=-10,z=-39908,r=100] cadwganNPC1`);
    overworld.runCommand(`tickingarea remove cadwgan_area`);

    // Reset all other NPCs to NPC0 dialogue state
    overworld.runCommand(`dialogue change @e[tag=idrisquestNPC] idrisquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=vikingNPC] vikingNPC0`);
    overworld.runCommand(`dialogue change @e[tag=betiquestNPC] betiquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gwenquestNPC] gwenquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=yrsaNPC] yrsaNPC0`);
    overworld.runCommand(`dialogue change @e[tag=nestquestNPC] nestquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=llewNPC] llewNPC0`);
    overworld.runCommand(`dialogue change @e[tag=eleriquestNPC] eleriquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=geraldNPC] geraldNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gutoNPC] gutoNPC0`);
    overworld.runCommand(`dialogue change @e[tag=carysquestNPC] carysquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=mabliNPC] mabliNPC0`);
  }, 20);
}

// Quest Three Start function with delayed dialogue change
export function questThreeStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 30 -39850 quest_three_area true`);

  // Wait for ticking area to establish before teleporting
  system.runTimeout(() => {
    // Show loading screen with fade effect
    overworld.runCommand(`title @p times 10 60 10`);
    overworld.runCommand(`title @p title §bLoading...`);
    overworld.runCommand(`camera @p fade time 0.2 0.5 0.2 color 0 0 0`);

    // First teleport: Remove stone bricks at -40388 area (far west)
    overworld.runCommand(`tp @p -40388 -16 -39959 facing -40388 -16 -39959`);

    // Wait for chunks to load (20 ticks = 1 second)
    system.runTimeout(() => {
    overworld.runCommand(`setblock -40388 -16 -39959 air`);
    overworld.runCommand(`setblock -40388 -15 -39959 air`);
    overworld.runCommand(`setblock -40388 -16 -39958 air`);
    overworld.runCommand(`setblock -40388 -15 -39958 air`);

    // Second teleport: Remove blocks around -40265 area (barrels, stone bricks, bookshelves)
    overworld.runCommand(`tp @p -40265 -14 -39925 facing -40265 -14 -39918`);

    // Wait for chunks to load (20 ticks = 1 second)
    system.runTimeout(() => {
    overworld.runCommand(`setblock -40268 -10 -40000 air`);
    overworld.runCommand(`setblock -40268 -9 -40000 air`);
    overworld.runCommand(`setblock -40268 -8 -40000 air`);
    overworld.runCommand(`setblock -40265 -16 -39918 air`);
    overworld.runCommand(`setblock -40265 -15 -39918 air`);
    overworld.runCommand(`setblock -40265 -14 -39918 air`);
    overworld.runCommand(`setblock -40266 -14 -39917 air`);
    overworld.runCommand(`setblock -40264 -14 -39917 air`);
    overworld.runCommand(`setblock -40253 -10 -39999 air`);
    overworld.runCommand(`setblock -40253 -9 -39999 air`);
    overworld.runCommand(`setblock -40253 -8 -39999 air`);

    // Third teleport: Remove blocks around -40309 and -40379 area
    overworld.runCommand(`tp @p -40340 -10 -39910 facing -40340 -10 -39910`);

    // Wait for chunks to load (20 ticks = 1 second)
    system.runTimeout(() => {
    overworld.runCommand(`setblock -40309 -10 -39912 air`);
    overworld.runCommand(`setblock -40309 -9 -39912 air`);
    overworld.runCommand(`setblock -40309 -8 -39912 air`);
    overworld.runCommand(`setblock -40310 -10 -39912 air`);
    overworld.runCommand(`setblock -40310 -9 -39912 air`);
    overworld.runCommand(`setblock -40310 -8 -39912 air`);
    overworld.runCommand(`setblock -40379 7 -39874 air`);
    overworld.runCommand(`setblock -40379 8 -39874 air`);

    // Now teleport to final position and place blocks
    overworld.runCommand(`tp @p -40280 -16 -39986 facing -40277 -16 -39986`);

    // Clear loading screen
    overworld.runCommand(`title @p clear`);

    // Wait a bit before placing blocks (20 ticks = 1 second)
    system.runTimeout(() => {
    // Place blocks
    overworld.runCommand(`setblock -40259 -10 -39999 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40260 -10 -39999 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40261 -10 -39999 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40261 -10 -40000 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40259 -9 -39999 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40260 -9 -39999 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40261 -9 -39999 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40261 -9 -40000 mossy_stone_bricks`);
    overworld.runCommand(`setblock -40380 -16 -39909 mossy_stone_brick_wall`);
    overworld.runCommand(`setblock -40381 -16 -39909 mossy_stone_brick_wall`);
    overworld.runCommand(`setblock -40382 -16 -39909 mossy_stone_brick_wall`);
    overworld.runCommand(`setblock -40380 -15 -39909 mossy_stone_brick_wall`);
    overworld.runCommand(`setblock -40381 -15 -39909 mossy_stone_brick_wall`);
    overworld.runCommand(`setblock -40382 -15 -39909 mossy_stone_brick_wall`);
    overworld.runCommand(`setblock -40361 -17 -39929 stone`);
    overworld.runCommand(`setblock -40360 -17 -39929 grass`);
    overworld.runCommand(`setblock -40359 -17 -39929 grass`);
    overworld.runCommand(`setblock -40358 -17 -39929 grass`);
    overworld.runCommand(`setblock -40358 -17 -39928 grass`);
    overworld.runCommand(`setblock -40358 -17 -39927 grass`);
    overworld.runCommand(`setblock -40359 -16 -39928 grass`);

    // Change dialogues
    overworld.runCommand(`dialogue change @e[tag=mabliNPC] mabliNPC1`);

    // Reset all other NPCs to NPC0 dialogue state
    overworld.runCommand(`dialogue change @e[tag=idrisquestNPC] idrisquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=vikingNPC] vikingNPC0`);
    overworld.runCommand(`dialogue change @e[tag=betiquestNPC] betiquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gwenquestNPC] gwenquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=yrsaNPC] yrsaNPC0`);
    overworld.runCommand(`dialogue change @e[tag=nestquestNPC] nestquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=llewNPC] llewNPC0`);
    overworld.runCommand(`dialogue change @e[tag=eleriquestNPC] eleriquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=geraldNPC] geraldNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gutoNPC] gutoNPC0`);
    overworld.runCommand(`dialogue change @e[tag=carysquestNPC] carysquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=cadwganNPC] cadwganNPC0`);

    overworld.runCommand(`tickingarea remove quest_three_area`);
    }, 20);
    }, 20);
    }, 20);
    }, 20);
  }, 10);
}

// Gerald function with delayed dialogue change
export function geraldQuest() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 gerald_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40255 -10 -39951 facing -40252 -10 -39951`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=geraldNPC] geraldNPC1`);

    // Reset all other NPCs to NPC0 dialogue state
    overworld.runCommand(`dialogue change @e[tag=idrisquestNPC] idrisquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=vikingNPC] vikingNPC0`);
    overworld.runCommand(`dialogue change @e[tag=betiquestNPC] betiquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gwenquestNPC] gwenquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=yrsaNPC] yrsaNPC0`);
    overworld.runCommand(`dialogue change @e[tag=nestquestNPC] nestquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=llewNPC] llewNPC0`);
    overworld.runCommand(`dialogue change @e[tag=eleriquestNPC] eleriquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gutoNPC] gutoNPC0`);
    overworld.runCommand(`dialogue change @e[tag=carysquestNPC] carysquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=mabliNPC] mabliNPC0`);

    overworld.runCommand(`tickingarea remove gerald_area`);
  }, 20);
}

// Carys Quest Start function with delayed dialogue change
export function carysQuestStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 carys_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40378 -16 -39925 facing -40378 -16 -39925`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=carysquestNPC] carysquestNPC1`);

    overworld.runCommand(`tickingarea remove carys_area`);
  }, 20);
}

// St Davids Reset function with ticking area
export function stDavidsReset() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 stdavids_reset true`);

  // Wait for chunks to load before executing reset commands (20 ticks = 1 second)
  system.runTimeout(() => {
    // Reset all NPCs to NPC0 dialogue state
    overworld.runCommand(`dialogue change @e[tag=yrsaNPC,c=1] yrsaNPC0`);
    overworld.runCommand(`dialogue change @e[tag=idrisquestNPC,c=1] idrisquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=vikingNPC,c=1] vikingNPC0`);
    overworld.runCommand(`dialogue change @e[tag=betiquestNPC,c=1] betiquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gwenquestNPC,c=1] gwenquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=geraldNPC,c=1] geraldNPC0`);
    overworld.runCommand(`dialogue change @e[tag=nestredoNPC,c=1] nestredoNPC0`);
    overworld.runCommand(`dialogue change @e[tag=llewNPC,c=1] llewNPC0`);
    overworld.runCommand(`dialogue change @e[tag=eleriquestNPC,c=1] eleriquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=cadwganNPC,c=1] cadwganNPC0`);
    overworld.runCommand(`dialogue change @e[tag=anwenNPC,c=1] anwenNPC0`);
    overworld.runCommand(`dialogue change @e[tag=gutoNPC,c=1] gutoNPC0`);
    overworld.runCommand(`dialogue change @e[tag=carysquestNPC,c=1] carysquestNPC0`);
    overworld.runCommand(`dialogue change @e[tag=carysNPC,c=1] carysNPC1`);
    overworld.runCommand(`dialogue change @e[tag=mabliNPC,c=1] mabliNPC0`);
    overworld.runCommand(`dialogue change @e[tag=taliesindavNPC,c=1] taliesindavNPC1`);

    // Teleport NPCs back to original positions
    overworld.runCommand(`tp @e[tag=geraldNPC] -40252 -10 -39951`);
    overworld.runCommand(`tp @e[tag=mabliNPC] -40277 -16 -39986`);

    // Clear player inventory except compass, camera, and book_and_quill
    overworld.runCommand(`clear @p`);
    overworld.runCommand(`give @p compass 1`);
    overworld.runCommand(`give @p camera 1`);
    overworld.runCommand(`give @p writable_book 1`);

    overworld.runCommand(`tickingarea remove stdavids_reset`);
  }, 20);
}

// Anwen Quest Start function with delayed dialogue change
export function anwenQuestStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 anwen_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40260 -10 -39981 facing -40260 -10 -39979`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=anwenNPC,x=-40260,y=-10,z=-39980,r=50] anwenNPC1`);
    overworld.runCommand(`dialogue change @e[tag=anwenNPC,c=1] anwenNPC1`);

    overworld.runCommand(`tickingarea remove anwen_area`);
  }, 20);
}

// Viking TP function with delayed dialogue change
export function vikingTp() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 viking_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40319 -16 -39925 facing -40319 -16 -39928`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=vikingNPC] vikingNPC1`);

    overworld.runCommand(`tickingarea remove viking_area`);
  }, 20);
}

// Viking TP Again function with delayed dialogue change
export function vikingTpAgain() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 viking_area2 true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40319 -16 -39925 facing -40319 -16 -39928`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=vikingNPC] vikingNPC2`);

    overworld.runCommand(`tickingarea remove viking_area2`);
  }, 20);
}

// Viking Dialogue Fix function with delayed dialogue change
export function vikingDialogueFix() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 viking_fix_area true`);

  // Change dialogue first
  overworld.runCommand(`dialogue change @e[tag=vikingNPC,c=1] vikingNPC3`);

  // Teleport player
  overworld.runCommand(`tp @p -40319 -16 -39925 facing -40319 -16 -39928`);

  // Wait for chunks to load, then clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`tickingarea remove viking_fix_area`);
  }, 20);
}

// Eleri Start function with delayed dialogue change
export function eleriStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 eleri_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40280 -16 -39994 facing -40280 -16 -39996`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=eleriquestNPC] eleriquestNPC1`);

    overworld.runCommand(`tickingarea remove eleri_area`);
  }, 20);
}

// Guto Quest Start function with delayed dialogue change
export function gutoQuestStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 guto_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40351 -16 -39909 facing -40353 -16 -39909`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=gutoNPC] gutoNPC1`);

    overworld.runCommand(`tickingarea remove guto_area`);
  }, 20);
}

// Llew Start function with delayed dialogue change
export function llewStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 llew_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40281 -16 -39952 facing -40281 -16 -39949`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=llewNPC] llewNPC1`);

    overworld.runCommand(`tickingarea remove llew_area`);
  }, 20);
}

// Nest Quest Start function with delayed dialogue change
export function nestQuestStart() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 20 -39850 nest_area true`);

  // Teleport player first
  overworld.runCommand(`tp @p -40306 -16 -40005 facing -40306 -16 -40008`);

  // Wait for chunks to load, then change dialogue and clean up (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=nestredoNPC] nestredoNPC1`);

    overworld.runCommand(`tickingarea remove nest_area`);
  }, 20);
}

// Block Remove 3 function with ticking area
export function blockRemove3() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 30 -39850 block_remove_3_area true`);

  // Wait for ticking area to establish before teleporting
  system.runTimeout(() => {
    // Teleport player
    overworld.runCommand(`tp @p -40270 -10 -39996 facing -40269 -10 -39998`);

    // Wait longer for chunks to fully load before executing commands (60 ticks = 3 seconds)
    system.runTimeout(() => {
    overworld.runCommand(`setblock -40268 -10 -40000 air`);
    overworld.runCommand(`setblock -40268 -9 -40000 air`);
    overworld.runCommand(`setblock -40268 -8 -40000 air`);
    overworld.runCommand(`setblock -40265 -16 -39918 air`);
    overworld.runCommand(`setblock -40265 -15 -39918 air`);
    overworld.runCommand(`setblock -40265 -14 -39918 air`);
    overworld.runCommand(`setblock -40266 -14 -39917 air`);
    overworld.runCommand(`setblock -40264 -14 -39917 air`);
    overworld.runCommand(`setblock -40253 -10 -39999 air`);
    overworld.runCommand(`setblock -40253 -9 -39999 air`);
    overworld.runCommand(`setblock -40253 -8 -39999 air`);
    overworld.runCommand(`setblock -40388 -16 -39959 air`);
    overworld.runCommand(`setblock -40388 -15 -39959 air`);
    overworld.runCommand(`setblock -40388 -16 -39958 air`);
    overworld.runCommand(`setblock -40388 -15 -39958 air`);
    overworld.runCommand(`setblock -40309 -10 -39912 air`);
    overworld.runCommand(`setblock -40309 -9 -39912 air`);
    overworld.runCommand(`setblock -40309 -8 -39912 air`);
    overworld.runCommand(`setblock -40310 -10 -39912 air`);
    overworld.runCommand(`setblock -40310 -9 -39912 air`);
    overworld.runCommand(`setblock -40310 -8 -39912 air`);
    overworld.runCommand(`setblock -40379 7 -39874 air`);
    overworld.runCommand(`setblock -40379 8 -39874 air`);

    overworld.runCommand(`tickingarea remove block_remove_3_area`);
    }, 60);
  }, 10);
}

// Block Removal 4 function with ticking area
export function blockRemoval4() {
  // Add ticking area to ensure all setblocks work at distance
  overworld.runCommand(`tickingarea add -40450 -30 -40050 -40240 30 -39850 block_removal_4_area true`);

  // Wait longer for ticking area to establish and chunks to fully load (60 ticks = 3 seconds)
  system.runTimeout(() => {
    overworld.runCommand(`setblock -40268 -10 -40000 air`);
    overworld.runCommand(`setblock -40268 -9 -40000 air`);
    overworld.runCommand(`setblock -40268 -8 -40000 air`);
    overworld.runCommand(`setblock -40265 -16 -39918 air`);
    overworld.runCommand(`setblock -40265 -15 -39918 air`);
    overworld.runCommand(`setblock -40265 -14 -39918 air`);
    overworld.runCommand(`setblock -40266 -14 -39917 air`);
    overworld.runCommand(`setblock -40264 -14 -39917 air`);
    overworld.runCommand(`setblock -40253 -10 -39999 air`);
    overworld.runCommand(`setblock -40253 -9 -39999 air`);
    overworld.runCommand(`setblock -40253 -8 -39999 air`);
    overworld.runCommand(`setblock -40388 -16 -39959 air`);
    overworld.runCommand(`setblock -40388 -15 -39959 air`);
    overworld.runCommand(`setblock -40388 -16 -39958 air`);
    overworld.runCommand(`setblock -40388 -15 -39958 air`);
    overworld.runCommand(`setblock -40309 -10 -39912 air`);
    overworld.runCommand(`setblock -40309 -9 -39912 air`);
    overworld.runCommand(`setblock -40309 -8 -39912 air`);
    overworld.runCommand(`setblock -40310 -10 -39912 air`);
    overworld.runCommand(`setblock -40310 -9 -39912 air`);
    overworld.runCommand(`setblock -40310 -8 -39912 air`);
    overworld.runCommand(`setblock -40379 7 -39874 air`);
    overworld.runCommand(`setblock -40379 8 -39874 air`);
    overworld.runCommand(`clear @p chest 0 1`);

    overworld.runCommand(`tickingarea remove block_removal_4_area`);
  }, 60);
}

// Structure Flint function
export function structure_flint() {
  // Teleport player
  overworld.runCommand(`tp @p -69063 -1 -68960`);
}

// To Mason function
export function to_mason() {
  // Teleport player
  overworld.runCommand(`tp @p -69029 3 -69044 facing -69029 3 -69045`);
  // Remove chest from inventory
  overworld.runCommand(`clear @p chest 0 1`);
}

//Script event handlers for quest functions
system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "cadw:quest_begin") {
    questBegin();
  } else if (event.id === "cadw:idris_quest") {
    idrisQuest();
  } else if (event.id === "cadw:dissolution") {
    dissolution();
  } else if (event.id === "cadw:quest_three_start") {
    questThreeStart();
  } else if (event.id === "cadw:gerald") {
    geraldQuest();
  } else if (event.id === "cadw:carys_quest_start") {
    carysQuestStart();
  } else if (event.id === "cadw:stdavids_reset") {
    stDavidsReset();
  } else if (event.id === "cadw:anwen_quest_start") {
    anwenQuestStart();
  } else if (event.id === "cadw:viking_tp") {
    vikingTp();
  } else if (event.id === "cadw:viking_tp_again") {
    vikingTpAgain();
  } else if (event.id === "cadw:viking_dialogue_fix") {
    vikingDialogueFix();
  } else if (event.id === "cadw:eleri_start") {
    eleriStart();
  } else if (event.id === "cadw:guto_quest_start") {
    gutoQuestStart();
  } else if (event.id === "cadw:llew_start") {
    llewStart();
  } else if (event.id === "cadw:nest_quest_start") {
    nestQuestStart();
  } else if (event.id === "cadw:block_remove_3") {
    blockRemove3();
  } else if (event.id === "cadw:block_removal_4") {
    blockRemoval4();
  } else if (event.id === "cadw:structure_flint") {
    structure_flint();
  } else if (event.id === "cadw:to_mason") {
    to_mason();
  }
});

//Button handlers
world.afterEvents.buttonPush.subscribe(async (event) => {
  const buttonLocation = event.block.location;
  const coordKey = `${buttonLocation.x},${buttonLocation.z}`;

  switch (coordKey) {
    case "79942,80003":
      startFlythrough("conwy","intro.conwy");
      break;
    case "79942,80008":
      startFlythrough("conwy","intro.conwy");
      break;
    case "79926,79997":
      overworld.runCommand(`function tp/tretower`);
      break;
    case "79926,79992":
      overworld.runCommand(`function tp/tretower`);
      break;
    case "79930,80015":
      overworld.runCommand(`function tp/stdavids`);
      break;
    case "79942,79992":
      overworld.runCommand(`function tp/stdavids`);
      break;
    case "79942,79997":
      overworld.runCommand(`function tp/stdavids`);
      break;
    case "79926,80003":
      overworld.runCommand(`tp @p -69127 -1 -68935 facing -69126 -1 -68937`);
      break;
    case "79926,80008":
      overworld.runCommand(`tp @p -69127 -1 -68935 facing -69126 -1 -68937`);
      break;
    case "79926,79981":
      overworld.runCommand(`tp @p -168929 -40 -169084`);
      break;
    case "79926,79986":
      overworld.runCommand(`tp @p -168929 -40 -169084`);
      break;
    case "-40316,-39879":
      overworld.runCommand(`give @p myname:chunk_of_mosaic 1`);
      overworld.runCommand(`dialogue open @e[tag=idrisquestNPC] @p idrisquestNPC3`);
      break;
    case "-40287,-39901":
      overworld.runCommand(`give @p blockbuilders:runestone 1`);
      overworld.runCommand(`dialogue open @e[tag=betiquestNPC] @p betiquestNPC2`);
      break;
    case "-40259,-40000":
      overworld.runCommand(`give @p blockbuilders:torn_inventory_page 1`);
      overworld.runCommand(`dialogue open @e[tag=anwenNPC] @p anwenNPC3`);
      break;
    case "-40382,-39906":
      overworld.runCommand(`give @p blockbuilders:cracked_casket 1`);
      overworld.runCommand(`dialogue open @e[tag=gutoNPC] @p gutoNPC2`);
      break;
    case "-40359,-39928":
      overworld.runCommand(`give @p myname:broken_stone_cross 1`);
      overworld.runCommand(`dialogue open @e[tag=carysquestNPC] @p carysquestNPC3`);
      break;
    case "-40288,-40008":
      overworld.runCommand(`function give_book_from_chest`);
      overworld.runCommand(`dialogue change @e[tag=nestredoNPC] nestredoNPC3`);
      overworld.runCommand(`dialogue open @e[tag=nestredoNPC] @p nestredoNPC3`);
      break;
    case "-40254,-39962":
      overworld.runCommand(`function give_book_two`);
      overworld.runCommand(`dialogue open @e[tag=llewNPC] @p llewNPC3`);
      break;
    case "-40265,-40004":
      overworld.runCommand(`function give_book_three`);
      overworld.runCommand(`dialogue open @e[tag=eleriquestNPC] @p eleriquestNPC3`);
      break;
    case "-40267,-40000":
      overworld.runCommand(`function give_book_four`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC] @p keeperNPC1`);
      break;
    case "-40265,-39917":
      overworld.runCommand(`function give_book_five`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC2] @p keeperNPC2`);
      break;
    case "-40253,-40000":
      overworld.runCommand(`function give_book_six`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC3] @p keeperNPC3`);
      break;
    case "-40389,-39959":
      overworld.runCommand(`function give_book_seven`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC4] @p keeperNPC4`);
      break;
    case "-40310,-39913":
      overworld.runCommand(`function give_book_eight`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC5] @p keeperNPC5`);
      break;
    case "-40379,-39875":
      overworld.runCommand(`function give_book_nine`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC6] @p keeperNPC6`);
      overworld.runCommand(`tp @e[tag=mabliNPC] -40265 -10 -40012`);
      overworld.runCommand(`dialogue change @e[tag=mabliNPC] mabliNPC6`);
      break;
    case "-69107,-68948":
      overworld.runCommand(`function give_flint_scroll_1`);
      overworld.runCommand(`dialogue open @e[tag=glynNPC] @p glynNPC5`);
      break;
    default:
      world.sendMessage(`Unhandled button location: ${buttonLocation.x} ${buttonLocation.z}`);
  }
});

world.afterEvents.itemUse.subscribe((event) => {
  if (event.itemStack.typeId === "minecraft:compass") {
      let taleisinActivated = getScore("completed", "quest");
      let form = new ActionFormData()
        .title(`ui.compass.title`)
        .body(`ui.compass.body`)
        .button(`ui.compass.button.stay`)
        .button(`ui.compass.button.galleri`)
        .button(`ui.compass.button.conwy`)
        .button(`ui.compass.button.tretower`)
        .button(`ui.compass.button.stdavids`)
        // .button(`ui.compass.button.flint`) // Temporarily disabled - to be implemented later
      if (taleisinActivated === 1) {
        form.button(`ui.compass.button.taleisin`)
      }
     form.show(event.source).then((response) => {
      if (response.selection === 0) {
      } else if (response.selection === 1) {
        overworld.runCommand(`tag @p remove buildChallenge`)
        overworld.runCommand(`tag @p remove tretowerChallenge`)
        overworld.runCommand(`tp @p 79934 -42 80011 facing 79934 -42 80005`)
      } else if (response.selection === 2) {
        overworld.runCommand(`tag @p remove buildChallenge`)
        overworld.runCommand(`function conwyreturn`)
      } else if (response.selection === 3) {
        overworld.runCommand(`tag @p remove buildChallenge`)
        overworld.runCommand(`tag @p remove tretowerChallenge`)
        overworld.runCommand(`function tp/tretower`)
      } else if (response.selection === 4) {
        overworld.runCommand(`tag @p remove buildChallenge`)
        overworld.runCommand(`tag @p remove tretowerChallenge`)
        overworld.runCommand(`function tp/stdavids`)
      /* Temporarily disabled Flint teleport - to be implemented later
      } else if (response.selection === 5) {
        overworld.runCommand(`tag @p remove buildChallenge`)
        overworld.runCommand(`tag @p remove tretowerChallenge`)
        overworld.runCommand(`function tp/flint`)
      */
      } else if (response.selection === 5) {
        overworld.runCommand(`tag @p remove buildChallenge`)
        overworld.runCommand(`tag @p remove tretowerChallenge`)
        overworld.runCommand(`tp @p 9883 29 10191 facing 9883 29 10195`)
      }
    });
  }
});

world.afterEvents.playerSpawn.subscribe((event) => {
  let block = overworld.getBlock({ x: 79936, y: -60, z: 80022 });
  if (block?.permutation?.matches("minecraft:diamond_block")) {
    block.setPermutation(BlockPermutation.resolve("minecraft:air"));
    startFlythrough("intro", "");
  }
});

export async function startFlythrough(type, actionBar) {
  switch (type) {
    /////// copy from here ///////
    case "conwy": {
      ///change this to the name you want.
      let finalLocation = "tp @p 9893 29 10172 facing 9899 29 10172";
      let facingOffset = 0.3;
      let path = await generatePath([
        { x: 9836, y: 73, z: 10238 }, //Change the start coordinate.
        { x: 10139, y: 73, z: 10204 }, //Change the end coordinate.
      ]);
      playerFlythrough(path, 1, finalLocation, { x: -10, z: 0 }, facingOffset, actionBar); //Change the second number to change the speed.
      break;
    }
    case "conwy_Intro": {
      ///change this to the name you want.
      let finalLocation = "endIntro";
      let facingOffset = 0.3;
      let path = await generatePath([
        { x: 9756, y: 89, z: 10257 }, //Change the start coordinate.
        { x: 10101, y: 79, z: 10215 }, //Change the end coordinate.
      ]);
      playerFlythrough(path, 1, finalLocation, { x: -10, z: 0 }, facingOffset, actionBar); //Change the second number to change the speed.
      break;
    }
    /////// to here /////// and paste below ////
    case "snowdon": {
      ///change this to the name you want.
      let finalLocation = "run Bala";
      let facingOffset = 0;
      let path = await generatePath([
        { x: 100448, y: 93, z: 99895 }, //Change the start coordinate.
        { x: 100035, y: 294, z: 99974 }, 
      ]);
      playerFlythrough(path, 1, finalLocation, { x: 10, z: 0 }, facingOffset, actionBar); //Change the second number to change the speed.
      break;
    }
    case "bala": {
      let finalLocation = "run Gower";
      let facingOffset = 0;
      let path = await generatePath([
        { x: 100800, y: 93, z: 99499 }, //Change the start coordinate.
        { x: 101033, y: 87, z: 99567 },
      ]);
      playerFlythrough(path, 1, finalLocation, { x: -10, z: 0 }, facingOffset, actionBar); //Change the second number to change the speed.
      break;
    }
    case "gower": {
      let finalLocation = "run conwy";
      let facingOffset = 0;
      let path = await generatePath([
        { x: 98249, y: 69, z: 100700 }, //Change the start coordinate.
        { x: 98190, y: 63, z: 100350 },
      ]);
      playerFlythrough(path, 1, finalLocation, { x: 10, z: 0 }, facingOffset, actionBar); //Change the second number to change the speed.
      break;
    }
    case "coch": {
      let finalLocation = "run conwy";
      let facingOffset = 0;
      let path = await generatePath([
        { x: 40345, y: -3, z: 40171 },
        { x: 40097, y: 45, z: 40034 },
      ]);
      playerFlythrough(path, 1, finalLocation, { x: 10, z: 0 }, facingOffset, actionBar); //Change the second number to change the speed.
      break;
    }
    case "intro": {
      overworld.runCommand(`title @p title blockbuilders:image_popup_0`);
      startFlythrough("snowdon", "intro.snowdon");
      let player = world.getAllPlayers()[0];
      player.stopMusic();
      player.playMusic("music.intro");
      system.runTimeout(() => {
        overworld.runCommand(`title @p title blockbuilders:cinematic_bars_fade_in`);
      }, 160);
      break;
    }
    ////////////////////////////////////////////
    default:
      error("Flythrough type: " + type + " not found");
      break;
  }
}

async function playerFlythrough(path, speed, finalLocation, offset, facingOffset, actionBar) {
  let player = world.getAllPlayers()[0];
  for (let i = 0; i < path.length - 1; i++) {
    let location = path[i];
    const nextPoint = path[i + 1];
    const facingLocation = {
      x: path[path.length - 1].x,
      y: nextPoint.y - facingOffset,
      z: path[path.length - 1].z,
    };

    system.runTimeout(async () => {
      let playerLocation = {
        x: location.x + (offset?.x || 0), // Apply x offset if provided
        y: location.y,
        z: location.z + (offset?.z || 0), // Apply z offset if provided
      };
      player.teleport(playerLocation);
      await overworld.runCommandAsync(
        `camera @p set minecraft:free pos ${location.x} ${location.y} ${location.z} facing ${facingLocation.x} ${facingLocation.y} ${facingLocation.z}`
      );
      if (i > 100 && i < path.length - 80){
        await overworld.runCommandAsync(`titleraw @p actionbar {"rawtext": [{"translate": "${actionBar}"}]}`);
      } else {
        await overworld.runCommandAsync(`title @p actionbar`);
      }
      if (path.length - 2 === i) {
        // Final point.
        await overworld.runCommandAsync(`camera @p clear`); // End of walk dialogue.
        if (finalLocation === "run Bala") {
          startFlythrough("bala", "intro.bala");
        } else if (finalLocation === "run Gower") {
          startFlythrough("gower", "intro.gower");
        } else if (finalLocation === "run conwy") {
          startFlythrough("conwy_Intro", "intro.conwy");
        } else if (finalLocation === "run coch") {
          startFlythrough("coch", "intro.coch");
        } else if (finalLocation === "endIntro") {
          overworld.runCommand(`title @p clear`);
          overworld.runCommand(`tp @p 79934 -42 80019 facing 79934 -42 80016`);
        } else {
          await overworld.runCommandAsync(finalLocation);
        }
      } else if (path.length - 10 === i) {
        await overworld.runCommandAsync(`camera @p fade time 0.2 1 0.2`);
      }
    }, i * speed);
  }
}

// Updated generatePath function to fix the y-value issue.
async function generatePath(path) {
  const generatedPath = [];

  for (let i = 0; i < path.length - 1; i++) {
    const startCoord = path[i];
    const endCoord = path[i + 1];

    const xDiff = endCoord.x - startCoord.x;
    const yDiff = endCoord.y - startCoord.y;
    const zDiff = endCoord.z - startCoord.z;

    const steps = Math.max(Math.abs(xDiff), Math.abs(yDiff), Math.abs(zDiff));

    const xIncrement = steps !== 0 ? xDiff / steps : 0;
    const yIncrement = steps !== 0 ? yDiff / steps : 0;
    const zIncrement = steps !== 0 ? zDiff / steps : 0;

    for (let j = 0; j <= steps; j++) {
      const x = startCoord.x + xIncrement * j;
      const y = startCoord.y + yIncrement * j;
      const z = startCoord.z + zIncrement * j;
      generatedPath.push({ x, y, z });
    }
  }

  return generatedPath;
}
