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
  // Teleport player first
  overworld.runCommand(`tp @p -40342 -10 -39878 facing -40342 -10 -39875`);

  // Wait for chunks to load, then change dialogue (20 ticks = 1 second)
  system.runTimeout(() => {
    overworld.runCommand(`dialogue change @e[tag=idrisquestNPC] idrisquestNPC1`);
  }, 20);
}

//Script event handlers for quest functions
system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "cadw:quest_begin") {
    questBegin();
  } else if (event.id === "cadw:idris_quest") {
    idrisQuest();
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
      overworld.runCommand(`tp @p -69031 3 -69052`);
      break;
    case "79926,80008":
      overworld.runCommand(`tp @p -69031 3 -69052`);
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
    case "-40284,-39900":
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
    case "-40388,-39959":
      overworld.runCommand(`function give_book_seven`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC4] @p keeperNPC4`);
      break;
    case "-40310,-39913":
      overworld.runCommand(`function give_book_eight`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC5] @p keeperNPC5`);
      break;
    case "-40336,-39899":
      overworld.runCommand(`function give_book_nine`);
      overworld.runCommand(`dialogue open @e[tag=keeperNPC6] @p keeperNPC6`);
      overworld.runCommand(`tp @e[tag=mabliNPC] -40265 -10 -40012`);
      overworld.runCommand(`dialogue change @e[tag=mabliNPC] mabliNPC6`);
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
