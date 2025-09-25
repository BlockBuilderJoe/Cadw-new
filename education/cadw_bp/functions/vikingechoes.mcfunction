# Viking Echoes function - teleport player and reset NPC dialogues
# Teleport player to specified location
tp @p -40328 -16 -40013 facing -40328 -16 -40016

# Set yrsaNPC to yrsaNPC1
dialogue change @e[tag=yrsaNPC] yrsaNPC1

# Reset all other NPCs to NPC0 dialogue state
dialogue change @e[tag=idrisquestNPC] idrisquestNPC0
dialogue change @e[tag=vikingNPC] vikingNPC0
dialogue change @e[tag=betiquestNPC] betiquestNPC0
dialogue change @e[tag=gwenquestNPC] gwenquestNPC0
dialogue change @e[tag=geraldNPC] geraldNPC0
dialogue change @e[tag=nestquestNPC] nestquestNPC0
dialogue change @e[tag=llewNPC] llewNPC0
dialogue change @e[tag=eleriquestNPC] eleriquestNPC0
dialogue change @e[tag=cadwganNPC] cadwganNPC0
dialogue change @e[tag=gutoNPC] gutoNPC0
dialogue change @e[tag=carysquestNPC] carysquestNPC0
dialogue change @e[tag=mabliNPC] mabliNPC0