# Dissolution function - teleport player and reset NPC dialogues
# Teleport player to specified location
tp @p -40384 -10 -39908 facing -40384 -10 -39905

# Set cadwganNPC to cadwganNPC1
dialogue change @e[tag=cadwganNPC] cadwganNPC1

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
dialogue change @e[tag=mabliNPC] mabliNPC0