# Place the structure with chest near the button
structure load flint_scroll_7 -68990 4 -69078

# Break the chest to drop items and teleport them to player
setblock -68990 4 -69078 air destroy
tp @e[type=item,x=-68990,y=4,z=-69078,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
