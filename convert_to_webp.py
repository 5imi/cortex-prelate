from PIL import Image
import os

images_dir = "images"
jpg_files = [
    "prelata-camion-cortex-falticeni-1.jpg",
    "prelata-tir-suceava-2.jpg",
    "prelata-basculanta-botosani-3.jpg",
    "prelata-auto-transport-4.jpg",
    "prelata-industriala-neamt-5.jpg",
    "prelata-camion-personalizata-6.jpg",
    "prelata-remorca-profesionala-7.jpg",
    "prelata-vehicul-comercial-8.jpg",
    "prelata-marfa-iasi-9.jpg",
    "prelata-transport-moldova-10.jpg",
    "prelata-camion-inscriptionata-11.jpg"
]

for filename in jpg_files:
    jpg_path = os.path.join(images_dir, filename)
    webp_path = os.path.join(images_dir, filename.replace('.jpg', '.webp'))
    
    img = Image.open(jpg_path)
    img.save(webp_path, "WEBP", quality=80, method=6)
    
    jpg_size = os.path.getsize(jpg_path)
    webp_size = os.path.getsize(webp_path)
    reduction = ((jpg_size - webp_size) / jpg_size) * 100
    
    print(f"OK {filename}: {jpg_size//1024}KB -> {webp_size//1024}KB (-{reduction:.1f}%)")

print("\nConversie WebP completa!")
