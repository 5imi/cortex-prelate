from PIL import Image
import os

images_dir = "images"
quality = 75

jpg_files = [
    "472550805_122191884902219624_5064120125852439791_n.jpg",
    "472922407_122191885022219624_2586593496233996747_n.jpg",
    "473419045_122193538250219624_6007044168972968818_n.jpg",
    "473597795_122193537938219624_5434368585339410251_n.jpg",
    "473621665_122193802646219624_3591758252480360737_n.jpg",
    "473634187_122193713288219624_7536413818761342894_n.jpg",
    "473699589_122193741632219624_2903541116703827692_n.jpg",
    "473722256_122193537848219624_1623507709148722975_n.jpg",
    "473753583_122193802550219624_7104601314602261359_n.jpg",
    "473819153_122193712472219624_6847389280851156587_n.jpg",
    "491736916_9550744085018029_5186337899700083499_n.jpg"
]

total_before = 0
total_after = 0

for filename in jpg_files:
    filepath = os.path.join(images_dir, filename)
    size_before = os.path.getsize(filepath)
    total_before += size_before
    
    img = Image.open(filepath)
    max_width = 1200
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
    
    img.save(filepath, "JPEG", quality=quality, optimize=True)
    size_after = os.path.getsize(filepath)
    total_after += size_after
    
    reduction = ((size_before - size_after) / size_before) * 100
    print(f"OK {filename}: {size_before//1024}KB -> {size_after//1024}KB (-{reduction:.1f}%)")

print(f"\nTotal: {total_before//1024}KB -> {total_after//1024}KB")
print(f"Economie: {(total_before-total_after)//1024}KB ({((total_before-total_after)/total_before)*100:.1f}%)")
