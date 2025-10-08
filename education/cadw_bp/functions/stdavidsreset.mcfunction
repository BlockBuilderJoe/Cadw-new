# Reset St. David's quest NPCs to their initial dialogue states
# First ensure ticking area is active for St. David's region
# Expanded to cover all NPCs from -40400 to -40240 (X) and -39870 to -40040 (Z)
tickingarea remove stdavids_reset
tickingarea add -40400 -30 -40040 -40240 20 -39870 stdavids_reset true

# Reset all NPCs to NPC0 dialogue state
# Using extended search without position constraints to ensure all NPCs are found
dialogue change @e[tag=yrsaNPC,c=1] yrsaNPC0
dialogue change @e[tag=idrisquestNPC,c=1] idrisquestNPC0
dialogue change @e[tag=vikingNPC,c=1] vikingNPC0
dialogue change @e[tag=betiquestNPC,c=1] betiquestNPC0
dialogue change @e[tag=gwenquestNPC,c=1] gwenquestNPC0
dialogue change @e[tag=geraldNPC,c=1] geraldNPC0
dialogue change @e[tag=nestredoNPC,c=1] nestredoNPC0
dialogue change @e[tag=llewNPC,c=1] llewNPC0
dialogue change @e[tag=eleriquestNPC,c=1] eleriquestNPC0
dialogue change @e[tag=cadwganNPC,c=1] cadwganNPC0
dialogue change @e[tag=anwenNPC,c=1] anwenNPC0
dialogue change @e[tag=gutoNPC,c=1] gutoNPC0
dialogue change @e[tag=carysquestNPC,c=1] carysquestNPC0
dialogue change @e[tag=carysNPC,c=1] carysNPC1
dialogue change @e[tag=mabliNPC,c=1] mabliNPC0
dialogue change @e[tag=taliesindavNPC,c=1] taliesindavNPC1

# Remove temporary ticking area after reset
tickingarea remove stdavids_reset

# Teleport geraldNPC back to original position
tp @e[tag=geraldNPC] -40252 -10 -39951

# Teleport mabliNPC back to original position
tp @e[tag=mabliNPC] -40277 -16 -39986

# Place stone blocks at test positions
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
setblock -40288 -16 -40010 stone
setblock -40289 -16 -40010 stone
setblock -40289 -16 -40009 stone
setblock -40289 -16 -40008 stone
setblock -40289 -16 -40007 stone
setblock -40288 -16 -40007 stone
setblock -40288 -15 -40010 stone
setblock -40289 -15 -40010 stone
setblock -40289 -15 -40009 stone
setblock -40289 -15 -40008 stone
setblock -40289 -15 -40007 stone
setblock -40288 -15 -40007 stone
setblock -40256 -19 -39959 stone
setblock -40255 -19 -39959 stone
setblock -40254 -19 -39959 stone
setblock -40256 -18 -39959 stone
setblock -40255 -18 -39959 stone
setblock -40254 -18 -39959 stone
setblock -40266 -10 -40004 stone
setblock -40266 -10 -40003 stone
setblock -40266 -10 -40002 stone
setblock -40266 -9 -40004 stone
setblock -40266 -9 -40003 stone
setblock -40266 -9 -40002 stone
setblock -40266 -10 -40005 stone
setblock -40265 -10 -40005 stone
setblock -40266 -9 -40005 stone
setblock -40265 -9 -40005 stone

# Clear player inventory except compass, camera, and book_and_quill
clear @p
give @p compass 1
give @p camera 1
give @p writable_book 1

# Add more NPC resets here as needed