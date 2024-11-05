#Option 1: Use an an Npc 
#Change: tag=welcomeNPC to the tag of the NPC, r=10 to the range from the NPC and npc.name.taliesinNPC to the tag in the en_US.lang file.
execute at @p if entity @e[tag=welcomeNPC,r=10] run title @p actionbar {"rawtext": [{"translate": "npc.name.taliesinNPC"}]}

#Option 2: Use a specific location
#Change: r=10 to the range from the location and x=9962,y=29,z=10168 to the coordinates of the location and WELCOME TEXT to the text you want to display
#remove the # to use this option
#execute at @p if entity @p[r=10,x=9962,y=29,z=10168] run title @p actionbar {"rawtext": [{"translate": "npc.name.taliesinNPC"}]}

