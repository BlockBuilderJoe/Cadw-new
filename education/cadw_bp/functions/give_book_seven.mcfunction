# Place the structure with chest near the button (underground)
structure load quest_4_4 -40388 -27 -39959

# Break the chest to drop items and teleport them to player
setblock -40388 -27 -39959 air destroy
tp @e[type=item,x=-40388,y=-27,z=-39959,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
