# Reset St. David's quest NPCs to their initial dialogue states
# Reset Yrsa's dialogue to yrsaNPC1
dialogue change @e[tag=yrsaNPC] yrsaNPC1

# Reset Idris's dialogue to idrisquestNPC1
dialogue change @e[tag=idrisquestNPC] idrisquestNPC1

# Clear player inventory except compass, camera, and book_and_quill
clear @p
give @p compass 1
give @p camera 1
give @p writable_book 1

# Add more NPC resets here as needed