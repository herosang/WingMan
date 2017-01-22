#!/usr/bin/env python2
#
# Example to classify faces.
# Brandon Amos
# 2015/10/11
#
# Copyright 2015-2016 Carnegie Mellon University
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import time

start = time.time()

import argparse
import cv2
import os
import pickle
import glob

from operator import itemgetter

import numpy as np
np.set_printoptions(precision=2)
import pandas as pd

import openface

fileDir = os.path.dirname(os.path.realpath(__file__))
modelDir = os.path.join(fileDir, '..', 'models')
dlibModelDir = os.path.join(modelDir, 'dlib')
openfaceModelDir = os.path.join(modelDir, 'openface')

def getList(gender):

		bash_command = "classifier.py --dlibFacePredictor /root/openface/models/dlib/shape_predictor_68_face_landmarks.dat --networkModel /root/openface/models/openface/nn4.small2.v1.t7 infer classifier.pkl dataset/"+gender+"/*.jpg" 
		import subprocess
		print(bash_command)
		process = subprocess.Popen(bash_command.split(), stdout=subprocess.PIPE)
		output, error = process.communicate()
		ratings = output
		print(ratings)


if __name__ == '__main__':
	import argparse
	parser = argparse.ArgumentParser()
	parser.add_argument("gender", type=str, choices=['male','female','both'])
	args = parser.parse_args()
	getList(args.gender)