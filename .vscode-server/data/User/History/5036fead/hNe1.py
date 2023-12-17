from tkinter import * 
from PIL import Image, ImageTk

def show_image():
    # PIL 모듈을 사용하여 이미지를 읽어옴
    img_pil = Image.open('path_to_your_image_file.jpg')  # 이미지 파일 경로로 수정
    img_tk = ImageTk.PhotoImage(img_pil)

    # Label 위젯에 이미지 설정
    img_label = tk.Label(window, image=img_tk)
    img_label.image = img_tk  # 참조 유지 (Garbage Collection 방지)
    img_label.pack()

def win3() : 
    window2 = Tk()
    window2.configure(bg="white")
    window2.title("Image Editor")

    l3 = Label(window2, text="사진 편집기") 
    l3.pack()

    # 건의1) 여기에 img.jpg를 tkinter GUI에서 볼 수 있으면 좋겠습니다. 
    get_img = getImage(window2)
    get_img.pack(side="left")

    # 건의 2) 여기에 argument를 넣을 수 있는 entry와 버튼을 만들어주시면 됩니다.
    # 버튼의 갯수 == 편집 기능의 갯수
    # 편집 기능 : 흑백, 사이즈 조절, 회전, 대칭, 윤곽선 검출, 객체 검출


    buttons = Button(window, text="클릭하세요!")  #버튼 프레임을 불러옵니다.
    buttons.pack(side="left")


    window2.mainloop()

win3() #윈도우 실행