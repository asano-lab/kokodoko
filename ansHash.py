#!/usr/bin/python3

import hashlib
import sys

qnum = input("Question Number?> ")
try:
    qnum = int(qnum)
except TypeError:
    print("Question Number Invalid!")
    sys.exit(-1)

ans = input("Answer> ")

text = "第" + str(qnum) + "回" + ans

hash = hashlib.sha256(text.encode("utf-8")).hexdigest()

print("Hash: " + hash)
