# Viking TP Again function - teleport player and set NPC dialogue
# Teleport player to specified location
tp @p -40319 -16 -39925 facing -40319 -16 -39928

# Remove chiseled tuff block
setblock -40287 -19 -39900 air
setblock -40287 -18 -39900 air
setblock -40286 -18 -39900 air
setblock -40284 -18 -39900 air
setblock -40283 -18 -39900 air
setblock -40283 -19 -39900 air
setblock -40287 -17 -39901 air
setblock -40286 -17 -39901 air

# Set vikingNPC to vikingNPC2
dialogue change @e[tag=vikingNPC] vikingNPC2