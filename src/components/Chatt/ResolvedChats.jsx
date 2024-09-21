import React from 'react'
import UserList from './UserList';

export default function ResolvedChats({ userData, setOpenchat }) {

  const resolvedChatData = userData.filter(chat => chat.status === 'Resolved');
  return (
    <>
         <UserList filterData={resolvedChatData}  setOpenchat={setOpenchat}/>
    </>
  );
}
