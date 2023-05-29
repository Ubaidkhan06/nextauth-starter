"use client"
import { signOut, signIn } from "next-auth/react"

const Button = () => {
    return (
        <div onClick={() => signOut()}>signOut</div>
    )
}


const Button2 = () => {
    return (
        <div onClick={() => signIn()}>signIn</div>
    )
}


export { Button, Button2 }