'use client'

import {useState, useEffect} from 'react'

const UPDATE_CYCLE =1000
const KEY_LOCALE = 'KEY_LOCALE'
//! ENUM: enumerated Type - 상수값을 모아두고 사용할 때
enum Locale {
    US = 'en-US',
    KR = 'ko-KR'
}
// TODO : switch문 
const getLocaleFromString =(text: string) =>{
    switch(text) {
    case Locale.US:
        return Locale.US
    case Locale.KR:
        return Locale.KR
    default: 
        return Locale.US
    }

}
// ! setInterval(콜백함수, 시간)는 "시간"을 간격으로 "콜백함수"를 반복하는 호출 함수임.
// ! localStorage란 브라우저에 key-value값을 storage에 저장할 수 있음 저장한 데이터는 세션간에 공유됨. -> 세션이 바뀌어도 저장한 데이터가 유지됨.


const Clock =() =>{
    const [timestamp, setTImestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)
    //타이머를 설정하기위한 부가작용 - 타이머의 초기화 처리 
    // 타이머를 설정하기 위한 부작용
    useEffect(() => {
        // 타이머 셋
        const timer = setInterval(() => {
          setTImestamp(new Date())
        }, UPDATE_CYCLE)
    
        // 클린업 함수를 전달하고, 언마운트 시에 타이머를 해제한다
        return () => {
          clearInterval(timer)
        }
        // 초기 그리기 시에만 실행한다
      }, [])
    
      // localstorage로부터 값을 로딩하기 위한 부작용
      useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
          setLocale(getLocaleFromString(savedLocale))
        }
      }, [])
    
      // locale이 바뀌었을 때, localstorage에 값을 저장하기 위한 부작용
      useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
        // 의존 배열에 locale을 전달하고, locale이 변화할 때마다 실행하도록 한다
      }, [locale])
    
    
    return(
        <div>
        <p>
          <span id="current-time-label">현재 시각</span>
          <span>:{timestamp.toLocaleString(locale)}</span>
          <select
            value={locale}
            onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
            <option value="en-US">en-US</option>
            <option value="ko-KR">ko=KR</option>
          </select>
        </p>
      </div>

        
    )
}

export default Clock