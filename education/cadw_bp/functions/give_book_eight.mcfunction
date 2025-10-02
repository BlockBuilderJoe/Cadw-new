# Place the structure with chest near the button (underground)
structure load quest_4_5 -40310 -21 -39913

# Break the chest to drop items and teleport them to player
setblock -40310 -21 -39913 air destroy
tp @e[type=item,x=-40310,y=-21,z=-39913,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
