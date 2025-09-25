# Anwen Quest Start function - teleport player and set NPC dialogue
# Teleport player to specified location
tp @p -40260 -10 -39981 facing -40260 -10 -39979

# Set anwenNPC to anwenNPC1 with extended range
# Using a larger search radius to ensure the NPC is found
dialogue change @e[tag=anwenNPC,x=-40260,y=-10,z=-39980,r=50] anwenNPC1

# Fallback: If NPC is still not found, try without position constraints
dialogue change @e[tag=anwenNPC,c=1] anwenNPC1