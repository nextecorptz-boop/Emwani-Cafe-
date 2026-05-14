import shutil
import os

copies = [
    ("assets/extracted/raw/emwani_profile_v2_part2_pages_11-20_page10_img2.jpeg", "assets/products/chioda-gold-packs.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part3_pages_21-30_page6_img0.jpeg", "assets/products/ingoma-pack.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part4_pages_31-39_page7_img0.jpeg", "assets/products/drip-coffee-boxes.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part3_pages_21-30_page3_img0.jpeg", "assets/farmers/farmer-cherries.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part2_pages_11-20_page8_img0.jpeg", "assets/origin/coffee-basket.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part2_pages_11-20_page2_img0.jpeg", "assets/origin/coffee-drying.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part1_pages_1-10_page6_img0.jpeg", "assets/extracted/selected/founder-leodger.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part2_pages_11-20_page8_img1.jpeg", "assets/patterns/heritage-line-art.jpeg"),
    ("assets/extracted/raw/emwani_profile_v2_part1_pages_1-10_page2_img0.jpeg", "assets/patterns/green-wave-pattern.jpeg")
]

for src, dst in copies:
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy(src, dst)
    print(f"Copied {src} to {dst}")
