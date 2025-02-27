#!/bin/bash

# Set firewall rules

sudo ufw enable
sudo ufw default deny
sudo ufw limit 22
sudo ufw allow 80
sudo ufw allow 443
sudo systemctl enable ufw
