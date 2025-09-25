# Reset St. David's quest NPCs to their initial dialogue states
# First ensure ticking area is active for St. David's region
tickingarea add circle -40320 -10 -39950 100 stdavids_reset true

# Reset all NPCs to NPC0 dialogue state
# Using extended search without position constraints to ensure all NPCs are found
dialogue change @e[tag=yrsaNPC,c=1] yrsaNPC0
dialogue change @e[tag=idrisquestNPC,c=1] idrisquestNPC0
dialogue change @e[tag=vikingNPC,c=1] vikingNPC0
dialogue change @e[tag=betiquestNPC,c=1] betiquestNPC0
dialogue change @e[tag=gwenquestNPC,c=1] gwenquestNPC0
dialogue change @e[tag=geraldNPC,c=1] geraldNPC0
dialogue change @e[tag=nestquestNPC,c=1] nestquestNPC0
dialogue change @e[tag=llewNPC,c=1] llewNPC0
dialogue change @e[tag=eleriquestNPC,c=1] eleriquestNPC0
dialogue change @e[tag=cadwganNPC,c=1] cadwganNPC0
dialogue change @e[tag=anwenNPC,c=1] anwenNPC0
dialogue change @e[tag=gutoNPC,c=1] gutoNPC0
dialogue change @e[tag=carysquestNPC,c=1] carysquestNPC0
dialogue change @e[tag=mabliNPC,c=1] mabliNPC0

# Remove temporary ticking area after reset
tickingarea remove stdavids_reset

# Teleport geraldNPC back to original position
tp @e[tag=geraldNPC] -40252 -10 -39951

# Clear player inventory except compass, camera, and book_and_quill
clear @p
give @p compass 1
give @p camera 1
give @p writable_book 1

# Add more NPC resets here as needed