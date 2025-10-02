# Place the structure with chest near the button (underground)
structure load quest_4_1 -40267 -21 -40000

# Break the chest to drop items and teleport them to player
setblock -40267 -21 -40000 air destroy
tp @e[type=item,x=-40267,y=-21,z=-40000,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
