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

for filename in webp_files:
    filepath = os.path.join(images_dir, filename)
    size_before = os.path.getsize(filepath)
    
    img = Image.open(filepath)
    img.save(filepath, "WEBP", quality=75, method=6)
    
    size_after = os.path.getsize(filepath)
    reduction = ((size_before - size_after) / size_before) * 100
    print(f"OK {filename}: {size_before//1024}KB -> {size_after//1024}KB ({reduction:+.1f}%)")

print("\nReoptimizare completa la quality 75!")
