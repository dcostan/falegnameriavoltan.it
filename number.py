from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw
from glob import glob
from os import mkdir, remove

try:
    mkdir("images")
except:
    pass

for folder in glob("images_raw/*"):
    counter = 1
    try:
        mkdir(folder.replace("images_raw", "images", 1))
    except:
        for f in glob(folder.replace("images_raw", "images", 1) + "/*"):            remove(f)
    for file in glob(folder + "/*"):
        img = Image.open(file)
        draw = ImageDraw.Draw(img)
        font = ImageFont.truetype("arial.ttf", 25)
        draw.text((img.size[0] - 50, img.size[1] - 40), str(counter), (255,255,255),font=font)
        img.save(file.replace("images_raw", "images", 1))
        counter = counter + 1
