'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


import React, { useEffect, useState } from 'react'

export default function Edit({ params }) {
    const apiUrl = process.env.Next_API
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [content, setContent] = useState("")

    const [dataPost, setDataPost] = useState("")
    const { id } = params
    const router = useRouter()
    console.log(title);





    useEffect(() => {
        getApiPost(id)
    }, [])
    const getApiPost = () => {
        fetch(`/api/post/${params.id}`).then(res => res.json()).then(result => {
            setDataPost(result)
            setTitle(result.post?.title)
            setImg(result.post?.img)
            setContent(result.post?.content)
        })
    }

    // const getApi = async (id) => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/api/post/6687ea40cf3ca6f1628e1df9`, {
    //             method: "GET",
    //             cache: "no-store"

    //         })
    //         if (!res.ok) {
    //             console.log("success");
    //         }

    //         const data = await res.json()
    //         setDataPost(data)

    //     } catch (error) {
    //         console.log(error);
    //     }

    // }







    const handleUpdate = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/post/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, img, content })
        })
        if (res.ok) {
            router.push('/')
        }
        console.log('werapol');
    }
    return (
        <div className='max-w-4xl md:mx-auto mx-10 '>
            <h1 className='my-5'>Update Post</h1>
            <hr className='my-3' />
            <div className="">
                <Link href='/' className='text-white bg-slate-500 py-2 px-3 rounded-sm '>
                    Back
                </Link>
            </div>
            <form className='mt-5' onSubmit={handleUpdate}>
                <input type="text"
                    value={title}
                    name="title"
                    id="title"
                    className='bg-slate-200 p-1 w-[300px] block mb-3'
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <input
                    value={img}
                    type="text"
                    name="img"
                    id="img"
                    className='bg-slate-200 p-1 w-[300px] block mb-3'
                    onChange={(e) => { setImg(e.target.value) }}
                />
                <textarea
                    value={content}
                    type="text"
                    name="content"
                    id="content"
                    rows='10'
                    className='bg-slate-200 p-1 w-[300px] block mb-3'
                    onChange={(e) => { setContent(e.target.value) }}
                />
                <button
                    className='py-2 px-3 bg-green-500 text-white rounded-sm'
                    type='submit'>Update Post
                </button>
            </form>
        </div>
    )
}
