import fitz
import os

pdf_dir = "uploads"
out_dir = "assets/extracted/raw"

os.makedirs(out_dir, exist_ok=True)

pdf_files = [f for f in os.listdir(pdf_dir) if f.endswith('.pdf')]

for pdf_file in pdf_files:
    pdf_path = os.path.join(pdf_dir, pdf_file)
    doc = fitz.open(pdf_path)
    print(f"Processing {pdf_file}...")
    for i in range(len(doc)):
        page = doc[i]
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list):
            xref = img[0]
            try:
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                pdf_basename = os.path.splitext(pdf_file)[0]
                image_filename = f"{pdf_basename}_page{i+1}_img{img_index}.{image_ext}"
                image_path = os.path.join(out_dir, image_filename)
                with open(image_path, "wb") as f:
                    f.write(image_bytes)
                print(f"Saved {image_filename}")
            except Exception as e:
                print(f"Failed to extract image {img_index} on page {i+1} of {pdf_file}: {e}")
