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
setblock -40268 -10 -40000 stone_bricks
setblock -40268 -9 -40000 stone_bricks
setblock -40268 -8 -40000 stone_bricks
setblock -40265 -16 -39918 barrel
setblock -40265 -15 -39918 barrel
setblock -40265 -14 -39918 barrel
setblock -40266 -14 -39917 barrel
setblock -40264 -14 -39917 barrel
setblock -40253 -10 -39999 bookshelf
setblock -40253 -9 -39999 bookshelf
setblock -40253 -8 -39999 bookshelf
setblock -40388 -16 -39959 stone_bricks
setblock -40388 -15 -39959 stone_bricks
setblock -40388 -16 -39958 stone_bricks
setblock -40388 -15 -39958 stone_bricks
setblock -40309 -10 -39912 stone_bricks
setblock -40309 -9 -39912 stone_bricks
setblock -40309 -8 -39912 stone_bricks
setblock -40310 -10 -39912 stone_bricks
setblock -40310 -9 -39912 stone_bricks
setblock -40310 -8 -39912 stone_bricks
setblock -40379 7 -39874 stone
setblock -40379 8 -39874 stone