from PIL import Image
import os

images_dir = "images"
webp_files = [
    "prelata-camion-cortex-falticeni-1.webp",
    "prelata-tir-suceava-2.webp",
    "prelata-basculanta-botosani-3.webp",
    "prelata-auto-transport-4.webp",
    "prelata-industriala-neamt-5.webp",
    "prelata-camion-personalizata-6.webp",
    "prelata-remorca-profesionala-7.webp",
    "prelata-vehicul-comercial-8.webp",
    "prelata-marfa-iasi-9.webp",
    "prelata-transport-moldova-10.webp",
    "prelata-camion-inscriptionata-11.webp"
]

total_before = 0
total_after = 0

for filename in webp_files:
    filepath = os.path.join(images_dir, filename)
    size_before = os.path.getsize(filepath)
    total_before += size_before
    
    img = Image.open(filepath)
    img.save(filepath, "WEBP", quality=70, method=6)
    
    size_after = os.path.getsize(filepath)
    total_after += size_after
    
    reduction = ((size_before - size_after) / size_before) * 100
    print(f"OK {filename}: {size_before//1024}KB -> {size_after//1024}KB (-{reduction:.1f}%)")

print(f"\nTotal: {total_before//1024}KB -> {total_after//1024}KB")
print(f"Economie: {(total_before-total_after)//1024}KB ({((total_before-total_after)/total_before)*100:.1f}%)")
