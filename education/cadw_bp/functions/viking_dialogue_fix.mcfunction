# This function teleports the player to the vikingNPC and opens dialogue

# Change the vikingNPC dialogue to vikingNPC3
dialogue change @e[tag=vikingNPC,c=1] vikingNPC3

# Teleport player to vikingNPC location
tp @p -40319 -16 -39925 facing -40319 -16 -39928

# Remove cobblestone blocks
setblock -40269 -16 -39993 air
setblock -40270 -16 -39993 air
setblock -40271 -16 -39993 air
setblock -40272 -16 -39993 air
setblock -40269 -15 -39993 air
setblock -40270 -15 -39993 air
setblock -40271 -15 -39993 air
setblock -40272 -15 -39993 air



