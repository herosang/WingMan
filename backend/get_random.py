from os import listdir
from os.path import isfile, join
import random

def get(gender):

	if(gender == 'male'):
		directory = 'dataset/male'
		num_images = 468
	if(gender == 'female'):
		directory = 'dataset/female'
		num_images = 1000
	if(gender == 'both'):
		directory = 'dataset/both'
		num_images = 1000

	files = [f for f in listdir(directory) if isfile(join(directory, f))]
	random_sample = [ files[i] for i in sorted(random.sample(xrange(len(files)), num_images)) ]

	return random_sample