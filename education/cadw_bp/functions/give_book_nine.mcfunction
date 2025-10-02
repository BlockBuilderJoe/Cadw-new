# Place the structure with chest near the button (underground)
structure load quest_4_6 -40336 -21 -39899

# Break the chest to drop items and teleport them to player
setblock -40336 -21 -39899 air destroy
tp @e[type=item,x=-40336,y=-21,z=-39899,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
