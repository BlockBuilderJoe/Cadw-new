# Remove any existing ticking areas first (optional, for cleanup)
tickingarea remove vikingNPC_area
tickingarea remove gwenquest_area
tickingarea remove combined_npc_area
tickingarea remove stdavids_area

# Create a larger ticking area that covers all NPCs including yrsaNPC, idrisquestNPC, carysNPC and taliesindavNPC
# Expanded to cover:
# - yrsaNPC (-40277 -10 -40004)
# - idrisquestNPC (-40342 -10 -39878)
# - carysNPC (estimated near -40359, -39928 button area)
# - taliesindavNPC (-40311 -14 -40033)
# Using a larger rectangular area from -40450 to -40250 (X), -40050 to -39850 (Z)
tickingarea add -40450 -30 -40050 -40250 20 -39850 stdavids_area

# Alternative: Use forceload for the chunks (if available in your version)
# tickingarea add circle -40389 -10 -39918 200 combined_npc_area

# Summon or teleport vikingNPC closer if it doesn't exist at the right location
# The vikingNPC needs to be within ~30 blocks of the player for dialogue to work
execute unless entity @e[tag=vikingNPC,x=-40389,y=-10,z=-39918,distance=..50] run tp @e[tag=vikingNPC,c=1] -40385 -10 -39918

# List all ticking areas to confirm
tickingarea list