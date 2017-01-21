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

import cv2
import openface
import os
import argparse
from os import listdir
from os.path import isfile, join
import glob

import numpy as np
np.set_printoptions(precision=2)

fileDir = os.path.dirname(os.path.realpath(__file__))
modelDir = os.path.join(fileDir, '..', 'models')
dlibModelDir = os.path.join(modelDir, 'dlib')
openfaceModelDir = os.path.join(modelDir, 'openface')


def getRep(imgDir, multiple=False):

    files = glob.glob("{imgDir}/*.jpg".format(imgDir=imgDir))

    bad_faces = []
    for imgPath in files:
        bgrImg = cv2.imread(imgPath)
        if bgrImg is None:
            raise Exception("Unable to load image: {}".format(imgPath))

        rgbImg = cv2.cvtColor(bgrImg, cv2.COLOR_BGR2RGB)

        if multiple:
            bbs = align.getAllFaceBoundingBoxes(rgbImg)
        else:
            bb1 = align.getLargestFaceBoundingBox(rgbImg)
            bbs = [bb1]
        if len(bbs) == 0 or (not multiple and bb1 is None):
            bad_faces.append(imgPath)
            os.remove(imgPath)
            print("Unable to find a face: {}".format(imgPath))
    print('{bad_faces} out of {total_image_count} images'.format(bad_faces=len(bad_faces), total_image_count=len(files)))


if __name__ == '__main__':

    parser = argparse.ArgumentParser()

    parser.add_argument(
        '--dlibFacePredictor',
        type=str,
        help="Path to dlib's face predictor.",
        default=os.path.join(
            dlibModelDir,
            "shape_predictor_68_face_landmarks.dat"))
    parser.add_argument(
        '--networkModel',
        type=str,
        help="Path to Torch network model.",
        default=os.path.join(
            openfaceModelDir,
            'nn4.small2.v1.t7'))
    parser.add_argument(
        '--workDir',
        type=str,
        help="Path to Images.")
    parser.add_argument('--imgDim', type=int,
                        help="Default image dimension.", default=96)
    parser.add_argument('--cuda', action='store_true')
    parser.add_argument('--verbose', action='store_true')

    args = parser.parse_args()
    if args.verbose:
        print("Argument parsing and import libraries took {} seconds.".format(
            time.time() - start))

    align = openface.AlignDlib(args.dlibFacePredictor)
    net = openface.TorchNeuralNet(args.networkModel, imgDim=args.imgDim,
                              cuda=args.cuda)

    getRep(args.workDir)
