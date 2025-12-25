
import os
from PIL import Image

image_dir = "images"
print(f"Checking images in {image_dir}...\n")

try:
    files = os.listdir(image_dir)
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            path = os.path.join(image_dir, f)
            try:
                with Image.open(path) as img:
                    print(f"FILE: {f:<20} | SIZE: {img.width} x {img.height} px")
            except Exception as e:
                print(f"FILE: {f:<20} | ERROR: {e}")
except FileNotFoundError:
    print("Directory not found.")
