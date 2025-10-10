# Place the structure with chest near the button (underground)
structure load flint_scroll_1 -69107 0 -68948

# Break the chest to drop items and teleport them to player
setblock -69107 0 -68948 air destroy
tp @e[type=item,x=-69107,y=0,z=-68948,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest
