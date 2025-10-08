# Viking TP function - teleport player and set NPC dialogue
# Teleport player to specified location
tp @p -40319 -16 -39925 facing -40319 -16 -39928

# Remove stone blocks at test positions
setblock -40315 -19 -39883 air
setblock -40316 -19 -39883 air
setblock -40317 -19 -39883 air
setblock -40317 -19 -39882 air
setblock -40317 -19 -39881 air
setblock -40317 -19 -39880 air
setblock -40317 -19 -39879 air
setblock -40317 -19 -39878 air
setblock -40316 -19 -39878 air
setblock -40315 -19 -39878 air
setblock -40314 -19 -39878 air
setblock -40314 -19 -39879 air
setblock -40314 -19 -39880 air
setblock -40314 -19 -39881 air
setblock -40314 -19 -39882 air
setblock -40314 -19 -39883 air
setblock -40315 -18 -39883 air
setblock -40316 -18 -39883 air
setblock -40317 -18 -39883 air
setblock -40317 -18 -39882 air
setblock -40317 -18 -39881 air
setblock -40317 -18 -39880 air
setblock -40317 -18 -39879 air
setblock -40317 -18 -39878 air
setblock -40316 -18 -39878 air
setblock -40315 -18 -39878 air
setblock -40314 -18 -39878 air
setblock -40314 -18 -39879 air
setblock -40314 -18 -39880 air
setblock -40314 -18 -39881 air
setblock -40314 -18 -39882 air
setblock -40314 -18 -39883 air

# Set vikingNPC to vikingNPC1
dialogue change @e[tag=vikingNPC] vikingNPC1