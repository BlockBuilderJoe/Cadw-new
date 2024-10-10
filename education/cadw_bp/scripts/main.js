import { world, system } from "@minecraft/server";

let overworld = world.getDimension("overworld");

system.afterEvents.scriptEventReceive.subscribe(async (event) => {
  if (event.id === "bb:flythrough") {
    startFlythrough(event.message);
  }
});

export async function startFlythrough(type) {
  switch (type) {
    /////// copy from here ///////
    case "conwy": {
      ///change this to the name you want.
      let path = await generatePath([
        { x: 27, y: 84, z: -88 }, //Change the start coordinate.
        { x: 25, y: 77, z: -173 }, //Change the end coordinate.
      ]);
      playerFlythrough(path, 1); //Change the second number to change the speed.
      break;
    }
    /////// to here /////// and paste below ////

    ////////////////////////////////////////////
    default:
      error("Flythrough type: " + type + " not found");
      break;
  }
}

async function playerFlythrough(path, speed) {
  let player = world.getAllPlayers()[0];

  for (let i = 0; i < path.length - 1; i++) {
    let location = path[i];
    const nextPoint = path[i + 1];
    const facingLocation = {
      x: nextPoint.x,
      y: nextPoint.y,
      z: nextPoint.z,
    };

    system.runTimeout(async () => {
      player.teleport(location, {
        facingLocation: facingLocation,
      });
      if (path.length - 2 === i) {
        // Final point.
        await overworld.runCommandAsync(`camera @p clear`); // End of walk dialogue.
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
