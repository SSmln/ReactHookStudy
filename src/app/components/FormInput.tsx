'use client'

import React from 'react'
import {useForm , SubmitHandler ,Controller} from 'react-hook-form'

type MyFormData ={
    isChecked:boolean
};


export default function FormInput() {
    const {control, handleSubmit, formState : {errors}} = useForm<MyFormData>()
    const onSubmit: SubmitHandler<MyFormData> = (data) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
            name= "isChecked"
            control={control}
            defaultValue={false}
            rules={{ required:true }}
            render={({ field :{onChange, value}}) =>
            <input type='checkbox' onChange={onChange} value={value} /> }
        />
            {errors.isChecked &&<label>체크해 주시죠</label>}
            <input type="submit" />
        </form>
  )
}
