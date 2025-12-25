
import os
from PIL import Image

image_dir = "images"
max_width = 1200  # Safe max width for clear retina displays but smaller file size
quality_setting = 85

print(f"🚀 Starting Image Optimization (WebP Conversion)...\n")

if not os.path.exists(image_dir):
    print("Error: 'images' directory not found.")
    exit()

files = os.listdir(image_dir)
count = 0
saved_space = 0

for f in files:
    if f.lower().endswith(('.png', '.jpg', '.jpeg')) and not f.endswith('.webp'):
        file_path = os.path.join(image_dir, f)
        file_name_no_ext = os.path.splitext(f)[0]
        new_file_path = os.path.join(image_dir, file_name_no_ext + ".webp")
        
        try:
            with Image.open(file_path) as img:
                # Calculate new dimensions keeping aspect ratio
                ratio = min(max_width / img.width, 1.0)
                new_size = (int(img.width * ratio), int(img.height * ratio))
                
                # Resize and Convert
                img = img.resize(new_size, Image.Resampling.LANCZOS)
                img.save(new_file_path, "WEBP", quality=quality_setting)
                
                # Calc stats
                original_size = os.path.getsize(file_path)
                new_size_bytes = os.path.getsize(new_file_path)
                saved = original_size - new_size_bytes
                saved_space += saved
                
                print(f"✅ Converted: {f} ({original_size/1024:.1f} KB) -> {os.path.basename(new_file_path)} ({new_size_bytes/1024:.1f} KB)")
                count += 1
        except Exception as e:
            print(f"❌ Error converting {f}: {e}")

print(f"\n🎉 Done! Converted {count} images.")
print(f"💾 Total Space Saved: {saved_space / (1024*1024):.2f} MB")
