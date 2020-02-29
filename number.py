from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw
from glob import glob
from os import mkdir, remove
from distutils.dir_util import copy_tree

def weightPercentage(img_size_1, img_size_2, percentage):
    return int(max(img_size_1, img_size_2) * percentage / 100)

try:
    mkdir("images")
except:
    pass

for folder in glob("images_raw/*"):
    counter = 1
    try:
        mkdir(folder.replace("images_raw", "images", 1))
    except:
        for f in glob(folder.replace("images_raw", "images", 1) + "/*.*"):
            remove(f)
    for file in sorted(glob(folder + "/*.*")):
        img = Image.open(file)
        draw = ImageDraw.Draw(img)
        font = ImageFont.truetype("arial.ttf", weightPercentage(img.size[0], img.size[1], 3))
        draw.text((img.size[0] - weightPercentage(img.size[0], img.size[1], 6), img.size[1] - weightPercentage(img.size[0], img.size[1], 5)),
                 str(counter), (255,255,255),font=font)
        img.save(file.replace("images_raw", "images", 1))
        counter = counter + 1

copy_tree("images_raw/brands", "images/brands")
