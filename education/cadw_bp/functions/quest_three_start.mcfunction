# Quest Three Start function - teleport player and set mabliNPC dialogue
# Teleport player to specified location
tp @p -40280 -16 -39986 facing -40277 -16 -39986

# Set mabliNPC to mabliNPC1
dialogue change @e[tag=mabliNPC] mabliNPC1

# Reset all other NPCs to NPC0 dialogue state
dialogue change @e[tag=idrisquestNPC] idrisquestNPC0
dialogue change @e[tag=vikingNPC] vikingNPC0
dialogue change @e[tag=betiquestNPC] betiquestNPC0
dialogue change @e[tag=gwenquestNPC] gwenquestNPC0
dialogue change @e[tag=yrsaNPC] yrsaNPC0
dialogue change @e[tag=nestquestNPC] nestquestNPC0
dialogue change @e[tag=llewNPC] llewNPC0
dialogue change @e[tag=eleriquestNPC] eleriquestNPC0
dialogue change @e[tag=geraldNPC] geraldNPC0
dialogue change @e[tag=gutoNPC] gutoNPC0
dialogue change @e[tag=carysquestNPC] carysquestNPC0
dialogue change @e[tag=cadwganNPC] cadwganNPC0
