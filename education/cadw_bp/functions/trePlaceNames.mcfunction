execute at @p if entity @e[tag=gateNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgatehouse"}]}
execute at @p if entity @e[tag=courtNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tcourtyard"}]}
execute at @p if entity @e[tag=kitchenNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tkitchen"}]}
execute at @p if entity @e[tag=butteryNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tbuttery"}]}
execute at @p if entity @e[tag=pantryNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tpantry"}]}
execute at @p if entity @e[tag=serveryNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tservery"}]}
execute at @p if entity @e[tag=hallNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreathall"}]}
execute at @p if entity @e[tag=solarNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tsolar"}]}
execute at @p if entity @e[tag=stewNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tnorth"}]}
execute at @p if entity @e[tag=wallNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.twallwalk"}]}

#Option 2: Use a specific location
#Change: r=10 to the range from the location and x=9962,y=29,z=10168 to the coordinates of the location and WELCOME TEXT to the text you want to display
#remove the # to use this option

execute at @p if entity @p[r=10,x=-19890,y=7,z=-20015] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.toutgate"}]}
execute at @p if entity @p[r=10,x=-19881,y=1,z=-19974] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tbailey"}]}
execute at @p if entity @p[r=5,x=-19918,y=8,z=-20045] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.toutkitchen"}]}
execute at @p if entity @p[r=5,x=-19904,y=8,z=-20055] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.thall"}]}
execute at @p if entity @p[r=10,x=-19888,y=8,z=-20091] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tchamber"}]}
execute at @p if entity @p[r=10,x=-19887,y=8,z=-20066] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreattower"}]}
execute at @p if entity @p[r=10,x=-19868,y=15,z=-20065] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreattower"}]}

