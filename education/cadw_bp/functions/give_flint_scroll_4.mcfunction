# Place the structure with chest near the button
structure load flint_scroll_4 -69101 3 -69104

# Break the chest to drop items and teleport them to player
setblock -69101 3 -69104 air destroy
tp @e[type=item,x=-69101,y=3,z=-69104,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
