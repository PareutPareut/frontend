// MainPage.js
import React, { useState } from 'react';
import Cal from './Cal'; // Cal 컴포넌트 가져오기
import useCalendar from './useCalendar';
import usePostEventCreate from '../../apis/hooks/usePostEventCreate';
import logo from '../../assets/logo.png';

const MainPage = () => {
  const [eventName, setEventName] = useState(''); // 잔디명 상태
  const [selectedDates, setSelectedDates] = useState([]); // 선택된 날짜들 상태
  const { mutate: createEvent } = usePostEventCreate();
  const {currentDate} = useCalendar();
  
  //잔디명 상태 업데이트
  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  // Create api 연결
  const handleCreateEvent = () => {
    // 잔디명과 날짜 리스트 유효성 확인
    if (!eventName) {
      alert("잔디명을 입력하세요");
      return;
    }
  
    if (selectedDates.length === 0) {
      alert("날짜를 선택해주세요");
      return;
    }
    
    try {
      const eventData = {
        date: selectedDates,
        event_name: eventName,
      };
      // 이벤트 생성 요청 보내기
      createEvent(eventData);
    } catch(error) {
      console.log("메인페이지 오류 ", error);
    }
  };
  
  const handleDateClick = (day) => {
    // 현재 년도, 월, 일
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, '0'); // 월을 2글자로 표시
    const formattedDay = `${day}`.padStart(2, '0'); // 일을 2글자로 표시

    const formattedDate = `${year}-${month}-${formattedDay}`;
    if (selectedDates.includes(formattedDate)) {
        setSelectedDates(selectedDates.filter((date) => date !== formattedDate));
    } else {
        setSelectedDates([...selectedDates, formattedDate]);
    }
  };

  return (
    <div className="MainPage max-w-3xl mx-auto">
      <div className="mainImg h-24 flex items-center justify-center">
        <img src={logo} className="w-32" alt="로고" />
      </div>
      <div className="mainName flex justify-center">
        <input
          className="w-80 border border-gray-300 rounded-lg p-2"
          placeholder="잔디명을 입력해주세요"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>
      <div className="calenderMain mt-5">
        {/* Cal 컴포넌트에 selectedDates와 handleDateClick을 props로 전달 */}
        <Cal selectedDates={selectedDates} onDateClick={handleDateClick} />
      </div>
      <div className='makeLawn flex items-center justify-center mt-5'>
        <button
          className='w-72 h-8 rounded-lg bg-green-800 text-white'
          onClick={handleCreateEvent}
        >
          잔디 만들기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
