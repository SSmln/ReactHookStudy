'use client'
import React from 'react'
import { useState, useRef } from 'react'

const sleep = (ms:number) => new Promise((resolve)=> setTimeout(resolve,ms))

const UPLOAD_DELAY=5

const ImageUploader = () =>{
    //input요소의 참조를 저장하기위한 inputImageRef로 input요소인 ref에 inputImageRef를 전달함.
    const InputImageRef = useRef<HTMLInputElement | null>(null)
    //fileRef는 선택된 파일객체를 유지함.
    //파일이 선택되면 input요소의 onChange 이벤트가 호출되기 때문에, 이 콜백 함수 안에서 fileRef.current에 업로드된 파일을 대입함.
    // 파일을 선택한 뒤에 버튼을 클릭하면, 일정시간이 지난뒤 파일명과 파일이 업로드된 표시가 텍스트로 표시됨.
    const fileRef = useRef<File | null>(null)
    const [message , setMessage] = useState<string |null>('')
    const onClickText =() =>{
        if(InputImageRef.current !==null){
            InputImageRef.current.click()
        }
    }
    const onChangeImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        if(files !== null && files.length >0) {
            fileRef.current = files[0]
        }
    }
    // ! async , await 함수 노션 정리
    const onClicKUpload = async() =>{
        if(fileRef.current !==null){
            await sleep(UPLOAD_DELAY)
            
            setMessage(`${fileRef.current.name} has been succesfully uploaded`)
         
        }
    }

    return(
        <div>
            <p style={{ textDecoration: 'underline'}} onClick={onClickText}>
                이미지 업로드
            </p>
            <input 
                ref={InputImageRef}
                type='file'
                accept='image/*'
                onChange={onChangeImage}
                style={{visibility:"hidden"}}
            />
            <br />
            <button onClick={onClicKUpload}>업로드 한다</button>
            {message !== null && <p>{message}</p>}

        </div>
    )
}

export default function UserInfo() {
  return (
    <div><ImageUploader /></div>
  )
}
