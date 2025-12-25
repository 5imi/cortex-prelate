from PIL import Image
import os

images_dir = "images"

# Redimensionare imagini card la 640x640 (pentru display 634x634)
card_images = {
    "card_truck_new.webp": (640, 640),
    "card_dump_truck.webp": (640, 640),
    "card_terrace.webp": (640, 640),
    "card_print.webp": (640, 640),
    "card_industrial_hall.webp": (640, 640),
    "card_greenhouse.webp": (640, 640),
    "logo.webp": (96, 96)
}

for filename, size in card_images.items():
    filepath = os.path.join(images_dir, filename)
    if not os.path.exists(filepath):
        continue
    
    size_before = os.path.getsize(filepath)
    img = Image.open(filepath)
    img = img.resize(size, Image.Resampling.LANCZOS)
    img.save(filepath, "WEBP", quality=85, method=6)
    size_after = os.path.getsize(filepath)
    
    reduction = ((size_before - size_after) / size_before) * 100
    print(f"OK {filename}: {size_before//1024}KB -> {size_after//1024}KB (-{reduction:.1f}%)")

print("\nRedimensionare completa!")
