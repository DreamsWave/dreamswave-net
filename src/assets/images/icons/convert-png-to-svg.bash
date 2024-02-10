#!/bin/bash

# Requires png2svg and svgo utilities

# Directory containing the PNG images
dir="$(dirname "$0")"

# Loop over all PNG images in the directory
for png in "$dir"/*.png
do
  # Remove the file extension
  filename="${png%.*}"
  
  # Convert PNG to SVG
  png2svg -o "$filename.svg" "$png"
  
  # Optimize SVG
  svgo "$filename.svg"
done
