# Place the structure with chest near the button
structure load flint_scroll_2 -69036 3 -69045

# Break the chest to drop items and teleport them to player
setblock -69036 3 -69045 air destroy
tp @e[type=item,x=-69036,y=3,z=-69045,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
