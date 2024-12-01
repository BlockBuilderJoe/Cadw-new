import { world, system, BlockPermutation } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

let overworld = world.getDimension("overworld");

function getScore(score, objective) {
  const scoreBoard = world.scoreboard.getObjective(objective);
  if (scoreBoard) {
    return scoreBoard.getScore(score);
  }
  return 0;
}




world.afterEvents.buttonPush.subscribe(async (event) => {
  const buttonLocation = event.block.location;

  switch ((buttonLocation.x, buttonLocation.z)) {
    case (79942, 80003):
      startFlythrough("conwy");
      break;
    case (79942, 80008):
      startFlythrough("conwy");
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
      if (taleisinActivated === 1) {
        form.button(`ui.compass.button.taleisin`)
      }
     form.show(event.source).then((response) => {
      if (response.selection === 0) {
      } else if (response.selection === 1) {
        overworld.runCommand(`tp @p 79934 -42 80011 facing 79934 -42 80005`)
      } else if (response.selection === 2) {
        overworld.runCommand(`function conwyreturn`)
      } else if (response.selection === 3) {
        overworld.runCommand(`tp @p 9883 29 10191 facing 9883 29 10195`)
      }
    });
  }
});

world.afterEvents.playerSpawn.subscribe((event) => {
  let block = overworld.getBlock({ x: 79936, y: -60, z: 80022 });
  if (block?.permutation?.matches("minecraft:diamond_block")) {
    block.setPermutation(BlockPermutation.resolve("minecraft:air"));
    startFlythrough("intro");
  }
});

export async function startFlythrough(type) {
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
      playerFlythrough(path, 1, finalLocation, { x: -10, z: 0 }, facingOffset); //Change the second number to change the speed.
      break;
    }
    /////// to here /////// and paste below ////
    case "intro": {
      ///change this to the name you want.
      let finalLocation = "tp @p 79934 -42 80020 facing 79934 -42 80015";
      let facingOffset = 5;
      let path = await generatePath([
        { x: 800301, y: 128, z: 800512 }, //Change the start coordinate.
        { x: 800225, y: 22, z: 800395 },
        { x: 800111, y: 8, z: 800195 } //Change the end coordinate.
      ]);
      playerFlythrough(path, 2, finalLocation, { x: 10, z: 0 }, facingOffset); //Change the second number to change the speed.
      break;
    }
    ////////////////////////////////////////////
    default:
      error("Flythrough type: " + type + " not found");
      break;
  }
}

async function playerFlythrough(path, speed, finalLocation, offset, facingOffset) {
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
      if (path.length - 2 === i) {
        // Final point.
        await overworld.runCommandAsync(`camera @p clear`); // End of walk dialogue.
        await overworld.runCommandAsync(finalLocation);
      } else if (path.length - 10 === i) {
        await overworld.runCommandAsync(`camera @p fade time 0.2 0.2 0.2`);
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
