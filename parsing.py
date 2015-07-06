fin = open("fall_2015.txt","r")
entireString = fin.read()
a = entireString.split("\t")
fin.close()
print a
