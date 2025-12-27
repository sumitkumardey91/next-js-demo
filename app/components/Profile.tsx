'use client'

import React, { useEffect } from 'react'
import { getCookieData, getToken, setCookieData } from '../actions/token'

function Profile() {

    async function t() {
        console.log(await getToken())
        console.log("cookies======> client", (await getCookieData()).oneCookie?.value)
        await setCookieData(10000)

    }
    useEffect(  () => {
        t()
        // fetch('http://localhost:3000/api/token').then((res) => res.json()).then((data) => console.log(data))
    }, [])
  return (
    <div>Profile</div>
  )
}

export default Profile