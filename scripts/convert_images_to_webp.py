#!/usr/bin/env python3
"""
Convierte todas las imágenes PNG/JPG del sitio a WebP comprimido
y actualiza las referencias en los archivos HTML y CSS.
"""
import os
from PIL import Image

ROOT = "/home/claude/landing-page"
IMAGES_DIR = os.path.join(ROOT, "images")
MAX_DIM = 1920      # ningún lado de la imagen supera esto (sigue viéndose nítido en retina)
QUALITY = 80        # calidad WebP (80 es el punto dulce calidad/peso)

HTML_FILES = ["index.html", "projects.html", "resume.html", "tech.html"]
CSS_FILES = ["assets/css/base.css"]

converted = []       # (ruta_relativa_original, ruta_relativa_webp, kb_antes, kb_despues)
skipped = []

for dirpath, _, filenames in os.walk(IMAGES_DIR):
    for fname in filenames:
        ext = fname.rsplit(".", 1)[-1].lower() if "." in fname else ""
        if ext not in ("png", "jpg", "jpeg"):
            continue

        src_path = os.path.join(dirpath, fname)
        rel_src = os.path.relpath(src_path, ROOT)
        webp_name = fname.rsplit(".", 1)[0] + ".webp"
        dst_path = os.path.join(dirpath, webp_name)
        rel_dst = os.path.relpath(dst_path, ROOT)

        try:
            before_kb = os.path.getsize(src_path) / 1024
            im = Image.open(src_path)

            # Convertir a RGB si trae alpha innecesario sobre fondo opaco (mantenemos RGBA si tiene transparencia real)
            if im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGBA" if "A" in im.mode else "RGB")

            # Redimensionar si excede el máximo permitido
            w, h = im.size
            if max(w, h) > MAX_DIM:
                scale = MAX_DIM / max(w, h)
                im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

            im.save(dst_path, "WEBP", quality=QUALITY, method=6)
            after_kb = os.path.getsize(dst_path) / 1024
            converted.append((rel_src, rel_dst, before_kb, after_kb))
        except Exception as e:
            skipped.append((rel_src, str(e)))

# --- Actualizar referencias en HTML y CSS: reemplazo de string simple (funciona con tags multilínea) ---
files_to_patch = HTML_FILES + CSS_FILES
for relf in files_to_patch:
    fpath = os.path.join(ROOT, relf)
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    original_content = content
    for rel_src, rel_dst, _, _ in converted:
        # Normalizar separadores para HTML (siempre usa /)
        src_web = rel_src.replace("\\", "/")
        dst_web = rel_dst.replace("\\", "/")
        if src_web in content:
            content = content.replace(src_web, dst_web)
    if content != original_content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)

# --- Reporte ---
total_before = sum(c[2] for c in converted)
total_after = sum(c[3] for c in converted)
print(f"Convertidas: {len(converted)} imágenes")
print(f"Peso total ANTES:  {total_before/1024:.1f} MB")
print(f"Peso total DESPUÉS: {total_after/1024:.1f} MB")
print(f"Ahorro: {(1 - total_after/total_before)*100:.1f}%")
if skipped:
    print(f"\nOmitidas ({len(skipped)}):")
    for s in skipped:
        print(" -", s)

print("\nTop 10 mayor ahorro:")
for rel_src, rel_dst, b, a in sorted(converted, key=lambda x: x[2]-x[3], reverse=True)[:10]:
    print(f"  {rel_src}: {b:.0f}KB -> {a:.0f}KB")
