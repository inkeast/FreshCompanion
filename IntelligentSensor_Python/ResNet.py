import paddle.fluid as fluid
import numpy
from PIL import Image


use_cuda = True

def load_image(file):
    im = Image.open(file)
    im = im.resize((32, 32), Image.ANTIALIAS)
    im = numpy.array(im).astype(numpy.float32)
    im = im.transpose((2, 0, 1))  # CHW
    im = im / 255.0
    im = numpy.expand_dims(im, axis=0)
    return im

def model_init(params_dirname):
    place = fluid.CUDAPlace(0) if use_cuda else fluid.CPUPlace()
    exe = fluid.Executor(place)
    inference_scope = fluid.core.Scope()
    inferprogram = fluid.io.load_inference_model(params_dirname, exe)
    return inferprogram,exe

def infer(inferprogram,exe,img):
    image = load_image(img)
    results = exe.run(inferprogram[0],
                      feed={inferprogram[1][0]: image},
                      fetch_list=inferprogram[2])
    print(results)
    return numpy.argmax(results[0])

   # print("infer results: %s" % label_list[numpy.argmax(results[0])])