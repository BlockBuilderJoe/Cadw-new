# This function runs every game tick (20 times per second)

# Teleport players with tretowerChallenge tag back if they move too far from Tretower
execute as @a[tag=tretowerChallenge] at @s unless entity @s[x=-19886,z=-20046,r=100] run tp @s -19880 2 -19981