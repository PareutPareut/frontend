from tkinter import * 

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
    get_button(window2)
    

    buttons = get_button(window2)  #버튼 프레임을 불러옵니다.
    buttons.pack(side="left")


    window2.mainloop()

win3() #윈도우 실행