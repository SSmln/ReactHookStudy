'use Client'

import React from 'react'
import ContextSample from './components/ContextSample'
import Counter from './components/ContextSample'
import Parent from './components/Parent'
import UseMemo from './components/UseMemo'
import Clock from './components/Clock'
import UserInfo from './components/UserInfo'
import UseEffect from './components/UseEffect'
import Sayhello from '@/pages/sayhello'
import SSG from '@/pages/ssg'
import Form from './components/Form'
import FormInput from './components/FormInput'
export default function page() {
  function Sample() {
    return <span>샘플페이지</span>
  }
  return (
    <>
    <FormInput />
    
    </>
  )
}
