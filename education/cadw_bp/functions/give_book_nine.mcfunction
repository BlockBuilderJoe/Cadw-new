# Place the structure with chest near the button (underground)
structure load quest_4_6 -40379 -4 -39875

# Break the chest to drop items and teleport them to player
setblock -40379 -4 -39875 air destroy
tp @e[type=item,x=-40379,y=-4,z=-39875,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
