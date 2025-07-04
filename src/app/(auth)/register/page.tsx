"use client"
import ScrollFloat from "@/TextAnimations/ScrollFloat/ScrollFloat";

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                reactbits
            </ScrollFloat>
        </div>
    )
}