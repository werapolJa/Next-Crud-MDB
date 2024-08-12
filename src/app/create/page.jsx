'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Result } from 'postcss'
import React, { useEffect, useState } from 'react'

export default function Create() {
    const [title, setTitle] = useState()
    const [img, setImg] = useState()
    const [content, setContent] = useState()

    const router = useRouter();



    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!title || !img || !content) {
            alert("Please complete all input");
            return;
        }

        const res = await fetch(`http://localhost:3000/api/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, img, content })
        })
        console.log();
        if (res.ok) {
            router.push('/')
        } else {
            throw new Error("Error")
        }

    }



    return (
        <div className='max-w-4xl md:mx-auto mx-10 '>
            <h1 className='my-5'>Create Post</h1>
            <hr className='my-3' />
            <div className="">
                <Link href='/' className='text-white bg-slate-500 py-2 px-3 rounded-sm '>
                    Back
                </Link>
            </div>
            <form className='mt-5' onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    id="title"
                    className='bg-slate-200 p-1 w-[300px] block mb-3'
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <input
                    type="text"
                    name="img"
                    id="img"
                    className='bg-slate-200 p-1 w-[300px] block mb-3'
                    onChange={(e) => { setImg(e.target.value) }}
                />
                <textarea
                    type="text"
                    name="content"
                    id="content"
                    rows='10'
                    className='bg-slate-200 p-1 w-[300px] block mb-3'
                    onChange={(e) => { setContent(e.target.value) }}
                />
                <button
                    className='py-2 px-3 bg-green-500 text-white rounded-sm'
                    type='submit'>Create Post
                </button>
            </form>
        </div>
    )
}
