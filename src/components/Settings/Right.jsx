import React from 'react'
import Userpage from '../User/Userpage';
import ShortCuts from './ShortCuts';

const Right = ({selectedList}) => {
  return (
    <>
       
       {selectedList === 'ShortCuts' ? <ShortCuts /> : <Userpage />
       
       }
    </>
  )
}

export default Right
