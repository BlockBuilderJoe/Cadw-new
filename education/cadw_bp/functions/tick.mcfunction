# This function runs every game tick (20 times per second)

# Ensure ticking areas are set up for NPCs (runs once when needed)
execute unless entity @e[type=armor_stand,name=ticking_areas_setup] run function setup_ticking_areas
execute unless entity @e[type=armor_stand,name=ticking_areas_setup] run summon armor_stand 0 -100 0 ticking_areas_setup

# Teleport players with tretowerChallenge tag back if they move too far from Tretower
execute as @a[tag=tretowerChallenge] at @s unless entity @s[x=-19886,z=-20046,r=200] run tp @s -19880 2 -19981