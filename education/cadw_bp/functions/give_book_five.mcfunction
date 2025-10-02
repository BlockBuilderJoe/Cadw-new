# Place the structure with chest near the button (underground)
structure load quest_4_2 -40265 -27 -39917

# Break the chest to drop items and teleport them to player
setblock -40265 -27 -39917 air destroy
tp @e[type=item,x=-40265,y=-27,z=-39917,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
