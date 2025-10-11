# Place the structure with chest near the button
structure load flint_scroll_3 -69035 3 -69092

# Break the chest to drop items and teleport them to player
setblock -69035 3 -69092 air destroy
tp @e[type=item,x=-69035,y=3,z=-69092,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
