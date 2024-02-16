// MainPage.js
import React, { useState } from 'react';
import Cal from './Cal'; // Cal 컴포넌트 가져오기
import logo from '../../assets/logo.png';

const MainPage = () => {
  const { weekCalendarList } = Cal();
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (day) => {
    const isSelected = selectedDates.includes(day);
    if (isSelected) {
      setSelectedDates(selectedDates.filter((date) => date !== day));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  return (
    <div className="MainPage max-w-3xl mx-auto">
      <div className="mainImg h-24 flex items-center justify-center">
        <img src={logo} className="w-32" alt="로고" />
      </div>
      <div className="mainName flex justify-center">
        <input className="w-80 border border-gray-300 rounded-lg p-2" placeholder="잔디명을 입력해주세요" />
      </div>
      <div className="calenderMain mt-5">
        <Cal weekCalendarList={weekCalendarList} handleDateClick={handleDateClick} />
      </div>
      <div className='makeLawn flex items-center justify-center mt-5'>
        <button className='w-72 h-8 rounded-lg bg-green-800 text-white'>잔디 만들기</button>
      </div>
    </div>
  );
};

export default MainPage;
