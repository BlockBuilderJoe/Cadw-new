# Reset St. David's quest NPCs to their initial dialogue states
# Reset Yrsa's dialogue to yrsaNPC1
dialogue change @e[tag=yrsaNPC] yrsaNPC1

# Reset Idris's dialogue to idrisquestNPC1
dialogue change @e[tag=idrisquestNPC] idrisquestNPC1

# Reset Gerald's dialogue to geraldNPC1
dialogue change @e[tag=geraldNPC] geraldNPC1

# Reset Viking's dialogue to vikingNPC1
dialogue change @e[tag=vikingNPC] vikingNPC1

# Reset Gwen's dialogue to gwenquestNPC1
dialogue change @e[tag=gwenquestNPC] gwenquestNPC1

# Reset Cadwgan's dialogue to cadwganNPC1
dialogue change @e[tag=cadwganNPC] cadwganNPC1

# Teleport geraldNPC back to original position
tp @e[tag=geraldNPC] -40252 -10 -39951

# Clear player inventory except compass, camera, and book_and_quill
clear @p
give @p compass 1
give @p camera 1
give @p writable_book 1

# Add more NPC resets here as needed