# Place the structure with chest near the button
structure load flint_scroll_9 -69134 -3 -68906

# Break the chest to drop items and teleport them to player
setblock -69134 -3 -68906 air destroy
tp @e[type=item,x=-69134,y=-3,z=-68906,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
