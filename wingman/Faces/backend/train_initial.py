import os

def train(likes, dislikes):

	folder_sort(likes, dislikes)
	align_faces = "./util/align-dlib.py ./training-images/ align outerEyesAndNose ./aligned-images/ --size 96"
	create_reps = "./batch-represent/main.lua -outDir ./generated-embeddings/ -data ./aligned-images/" 
	gen_pkl = "./demos/classifier.py train ./"
	import subprocess
	process = subprocess.Popen(align_faces.split(), stdout=subprocess.PIPE)
	process = subprocess.Popen(create_reps.split(), stdout=subprocess.PIPE)
	process = subprocess.Popen(gen_pkl.split(), stdout=subprocess.PIPE)
	output, error = process.communicate()

def folder_sort(likes, dislikes):
	if not os.path.exists('./training_images'):
   		os.makedirs('./training_images')
   		os.makedirs('./training_images/like')
   		os.makedirs('./training_images/dislike')
	for filename in likes:
		shutil.copy(filename, './training_images/like')

	for filename in dislikes:
		shutil.copy(filename, './training_images/dislikes')
		
if __name__ == '__main__':
	train()