#!/bin/bash

for (( ; ; ))
do
        java -Xmx8G -jar paper.jar nogui
        echo "Server closed unexpectedly, restarting in 4 seconds..."
        sleep 4
done
