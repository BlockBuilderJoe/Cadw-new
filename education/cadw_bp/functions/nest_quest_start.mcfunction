# Nest Quest Start function - teleport player and set NPC dialogue
# Teleport player to specified location
tp @p -40306 -16 -40005 facing -40306 -16 -40008

# Set nestquestNPC to nestquestNPC1
dialogue change @e[tag=nestredoNPC] nestredoNPC1

# Remove stone blocks
setblock -40288 -16 -40010 air
setblock -40289 -16 -40010 air
setblock -40289 -16 -40009 air
setblock -40289 -16 -40008 air
setblock -40289 -16 -40007 air
setblock -40288 -16 -40007 air
setblock -40288 -15 -40010 air
setblock -40289 -15 -40010 air
setblock -40289 -15 -40009 air
setblock -40289 -15 -40008 air
setblock -40289 -15 -40007 air
setblock -40288 -15 -40007 air