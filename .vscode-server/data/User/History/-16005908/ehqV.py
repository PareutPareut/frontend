import cv2

cat_cascade = cv2.CascadeClassifier('haaracascade_frontalcatface.xml')

img = cv2.imread('./image/cats.jpeg')
gray = cv2.cvtColor(img, cv2.COLOR_BRG2GRAY)

cats = cat_cascade.detectMultiScale(gray, 1.1, 2)

for(x,y,w,h) in cats:
    print(x,y,w,h)
    cv2.imrectangle(img, (x,y), (x+y,y+h), (255,0,0), 2)

print('number of cats in image =', )

cv2.imshow('img',img)
cv2.waitKey()