#Option 1: Use an an Npc 
#Change: tag=welcomeNPC to the tag of the NPC, r=10 to the range from the NPC and npc.name.taliesinNPC to the tag in the en_US.lang file.
#execute at @p if entity @e[tag=welcomeNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "npc.name.taliesinNPC"}]}

execute at @p if entity @e[tag=pcNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.portcullis"}]}
execute at @p if entity @e[tag=wbNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.westbarbican"}]}
execute at @p if entity @e[tag=mgNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.maingate"}]}
execute at @p if entity @e[tag=owNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.outerward"}]}
execute at @p if entity @e[tag=nwtNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.northwesttower"}]}
execute at @p if entity @e[tag=swtNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.southwesttower"}]}
execute at @p if entity @e[tag=cghNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.chapel"}]}
execute at @p if entity @e[tag=ptNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.prisontower"}]}
execute at @p if entity @e[tag=kitchNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.kitchen"}]}
execute at @p if entity @e[tag=wellNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.well"}]}
execute at @p if entity @e[tag=midgNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.middlegate"}]}
execute at @p if entity @e[tag=iwNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.innerward"}]}
execute at @p if entity @e[tag=cgcNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.kingsgreat"}]}
execute at @p if entity @e[tag=ctNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.chapeltower"}]}
execute at @p if entity @e[tag=wcNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.watchingchamber"}]}
execute at @p if entity @e[tag=ktNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.kingstower"}]}
execute at @p if entity @e[tag=qcNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.queenschamber"}]}
execute at @p if entity @e[tag=bhNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.bakehouse"}]}
execute at @p if entity @e[tag=stNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.stockhouse"}]}
execute at @p if entity @e[tag=ebNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.eastbarbican"}]}
execute at @p if entity @e[tag=wwNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.wallwalk"}]}
execute at @p if entity @e[tag=twNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.townwall"}]}


#Option 2: Use a specific location
#Change: r=10 to the range from the location and x=9962,y=29,z=10168 to the coordinates of the location and WELCOME TEXT to the text you want to display
#remove the # to use this option
#execute at @p if entity @p[r=10,x=9962,y=29,z=10168] run title @p actionbar {"rawtext": [{"translate": "npc.name.taliesinNPC"}]}

