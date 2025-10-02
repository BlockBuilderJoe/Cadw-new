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

# Clear player inventory except compass, camera, and book_and_quill
clear @p
give @p compass 1
give @p camera 1
give @p writable_book 1

# Add more NPC resets here as needed