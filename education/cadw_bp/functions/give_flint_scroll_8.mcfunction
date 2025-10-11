# Place the structure with chest near the button
structure load flint_scroll_8 -68978 9 -69072

# Break the chest to drop items and teleport them to player
setblock -68978 9 -69072 air destroy
tp @e[type=item,x=-68978,y=9,z=-69072,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
