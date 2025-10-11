# Place the structure with chest near the button
structure load flint_scroll_6 -69000 5 -69178

# Break the chest to drop items and teleport them to player
setblock -69000 5 -69178 air destroy
tp @e[type=item,x=-69000,y=5,z=-69178,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
