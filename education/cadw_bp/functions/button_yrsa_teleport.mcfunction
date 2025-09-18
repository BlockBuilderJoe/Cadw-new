# Function triggered when button at -40271 -17 -39992 is pressed
# Give the player blockbuilders:broken_alter
give @a[r=10] blockbuilders:broken_alter 1
# Change Yrsa's dialogue to yrsaNPC10
dialogue change @e[tag=yrsaNPC] yrsaNPC10
# Change gwenquestNPC's dialogue to gwenquestNPC2
dialogue change @e[tag=gwenquestNPC,c=1] gwenquestNPC2
# Teleport the player to specific coordinates
tp @a[r=10] -40389 -10 -39918 facing -40391 -10 -39918
# Open gwenquestNPC2 dialogue
dialogue open @e[tag=gwenquestNPC,c=1] @a[r=10] gwenquestNPC2