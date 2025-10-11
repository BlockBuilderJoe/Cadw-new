# Place the structure with chest near the button
structure load flint_scroll_5 -69093 3 -69180

# Break the chest to drop items and teleport them to player
setblock -69093 3 -69180 air destroy
tp @e[type=item,x=-69093,y=3,z=-69180,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
