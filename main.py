import face_recognition
file = open('result.txt', 'w')
file.write("hello")
file.close()

t1 = face_recognition.load_image_file("t1.jpg")
t2 = face_recognition.load_image_file("t2.jpg")
ten1 = face_recognition.face_encodings(t1)[0]
ten2 = face_recognition.face_encodings(t2)[0]

results = face_recognition.compare_faces([ten1], ten2)

print(results)


file = open('result.txt', 'w')
file.write(results)
file.close()

