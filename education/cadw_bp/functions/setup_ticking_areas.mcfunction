# Remove any existing ticking areas first (optional, for cleanup)
tickingarea remove vikingNPC_area
tickingarea remove gwenquest_area
tickingarea remove combined_npc_area

# Create a single large ticking area that covers both NPCs
# Center it between gwenquestNPC1 (-40389 -10 -39918) and where vikingNPC should be
# Using a rectangular area to ensure full coverage
tickingarea add -40450 -30 -40000 -40250 20 -39850 combined_npc_area

# Alternative: Use forceload for the chunks (if available in your version)
# tickingarea add circle -40389 -10 -39918 200 combined_npc_area

# Summon or teleport vikingNPC closer if it doesn't exist at the right location
# The vikingNPC needs to be within ~30 blocks of the player for dialogue to work
execute unless entity @e[tag=vikingNPC,x=-40389,y=-10,z=-39918,distance=..50] run tp @e[tag=vikingNPC,c=1] -40385 -10 -39918

# List all ticking areas to confirm
tickingarea list