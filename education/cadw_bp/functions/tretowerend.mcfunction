# Give player the tretowerChallenge tag for temporary creative mode
tag @p add tretowerChallenge

# This command should be in a repeating command block or tick function:
# execute as @a[tag=tretowerChallenge] unless entity @s[x=-19886,y=-64,z=-20046,dx=200,dy=384,dz=200] run tp @s -19880 2 -19981

# Set creative mode (redundant with gameModeLock but ensures immediate effect)
gamemode creative @p

# Clear any effects
effect @p clear