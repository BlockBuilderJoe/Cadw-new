# Gerald function - teleport player and reset NPC dialogues
# Teleport player to specified location
tp @p -40255 -10 -39951 facing -40252 -10 -39951

# Set geraldNPC to geraldNPC1
dialogue change @e[tag=geraldNPC] geraldNPC1

# Reset all other NPCs to NPC0 dialogue state
dialogue change @e[tag=idrisquestNPC] idrisquestNPC0
dialogue change @e[tag=vikingNPC] vikingNPC0
dialogue change @e[tag=betiquestNPC] betiquestNPC0
dialogue change @e[tag=gwenquestNPC] gwenquestNPC0
dialogue change @e[tag=yrsaNPC] yrsaNPC0
dialogue change @e[tag=nestquestNPC] nestquestNPC0
dialogue change @e[tag=llewNPC] llewNPC0
dialogue change @e[tag=eleriquestNPC] eleriquestNPC0
dialogue change @e[tag=cadwganNPC] cadwganNPC0
dialogue change @e[tag=gutoNPC] gutoNPC0
dialogue change @e[tag=carysquestNPC] carysquestNPC0
dialogue change @e[tag=mabliNPC] mabliNPC0

# Place stone blocks
setblock -40315 -19 -39883 stone
setblock -40316 -19 -39883 stone
setblock -40317 -19 -39883 stone
setblock -40317 -19 -39882 stone
setblock -40317 -19 -39881 stone
setblock -40317 -19 -39880 stone
setblock -40317 -19 -39879 stone
setblock -40317 -19 -39878 stone
setblock -40316 -19 -39878 stone
setblock -40315 -19 -39878 stone
setblock -40314 -19 -39878 stone
setblock -40314 -19 -39879 stone
setblock -40314 -19 -39880 stone
setblock -40314 -19 -39881 stone
setblock -40314 -19 -39882 stone
setblock -40314 -19 -39883 stone
setblock -40315 -18 -39883 stone
setblock -40316 -18 -39883 stone
setblock -40317 -18 -39883 stone
setblock -40317 -18 -39882 stone
setblock -40317 -18 -39881 stone
setblock -40317 -18 -39880 stone
setblock -40317 -18 -39879 stone
setblock -40317 -18 -39878 stone
setblock -40316 -18 -39878 stone
setblock -40315 -18 -39878 stone
setblock -40314 -18 -39878 stone
setblock -40314 -18 -39879 stone
setblock -40314 -18 -39880 stone
setblock -40314 -18 -39881 stone
setblock -40314 -18 -39882 stone
setblock -40314 -18 -39883 stone

# Place chiseled tuff block
setblock -40287 -19 -39900 chiseled_tuff
setblock -40287 -18 -39900 chiseled_tuff
setblock -40286 -18 -39900 chiseled_tuff
setblock -40284 -18 -39900 chiseled_tuff
setblock -40283 -18 -39900 chiseled_tuff
setblock -40283 -19 -39900 chiseled_tuff
setblock -40287 -17 -39901 chiseled_tuff
setblock -40286 -17 -39901 chiseled_tuff
setblock -40269 -16 -39993 cobblestone
setblock -40270 -16 -39993 cobblestone
setblock -40271 -16 -39993 cobblestone
setblock -40272 -16 -39993 cobblestone
setblock -40269 -15 -39993 cobblestone
setblock -40270 -15 -39993 cobblestone
setblock -40271 -15 -39993 cobblestone
setblock -40272 -15 -39993 cobblestone