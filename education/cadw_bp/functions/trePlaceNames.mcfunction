execute at @p if entity @e[tag=twelcomeNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgatehouse"}]}
execute at @p if entity @e[tag=courtNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tcourtyard"}]}
execute at @p if entity @e[tag=kitchenNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tkitchen"}]}
execute at @p if entity @e[tag=butteryNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tbuttery"}]}
execute at @p if entity @e[tag=pantryNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tpantry"}]}
execute at @p if entity @e[tag=serveryNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tservery"}]}
execute at @p if entity @e[tag=hallNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreathall"}]}
execute at @p if entity @e[tag=solarNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tsolar"}]}
execute at @p if entity @e[tag=stewNPC,r=5] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tnorthrange"}]}
execute at @p if entity @e[tag=wallNPC,r=10] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.twallwalk"}]}

#Option 2: Use a specific location
#Change: r=10 to the range from the location and x=9962,y=29,z=10168 to the coordinates of the location and WELCOME TEXT to the text you want to display
#remove the # to use this option

execute at @p if entity @p[r=10,x=-19890,y=7,z=-20015] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.toutgate"}]}
execute at @p if entity @p[r=10,x=-19881,y=1,z=-19974] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tbailey"}]}
execute at @p if entity @p[r=5,x=-19918,y=8,z=-20045] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.toutkitchen"}]}
execute at @p if entity @p[r=5,x=-19904,y=8,z=-20055] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.thall"}]}
execute at @p if entity @p[r=5,x=-19888,y=8,z=-20091] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tchamber"}]}
execute at @p if entity @p[r=10,x=-19887,y=8,z=-20066] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreattower"}]}
execute at @p if entity @p[r=10,x=-19868,y=15,z=-20065] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreattower"}]}
execute at @p if entity @p[r=2,x=-20047,y=13,z=-19652] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tbedchamber"}]}
execute at @p if entity @p[r=2,x=-20038,y=12,z=-19655] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tbedchamber"}]}
execute at @p if entity @p[r=5,x=-20037,y=12,z=-19635] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.twithchamber"}]}
execute at @p if entity @p[r=5,x=-20036,y=12,z=-19611] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgreatchamber"}]}
execute at @p if entity @p[r=5,x=-20038,y=12,z=-19588] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tapartment"}]}
execute at @p if entity @p[r=5,x=-20039,y=4,z=-19586] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tapartment"}]}
execute at @p if entity @p[r=3,x=-20043,y=12,z=-19647] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgallery"}]}
execute at @p if entity @p[r=3,x=-20045,y=12,z=-19590] run titleraw @p actionbar {"rawtext": [{"translate": "cw.placename.tgallery"}]}
