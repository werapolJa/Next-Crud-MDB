'use client'

import Image from "next/image";
import Link from "next/link";
import { Result } from "postcss";
import { useEffect, useState } from "react";

export default function Home() {


  const apiUrl = process.env.NEXT_PUBLIC_API_LOCAL;
  console.log(apiUrl);

  const [postApi, setPostApi] = useState([])

  useEffect(() => {

    const ApiPost = async () => {

      const res = await fetch(`${apiUrl}/api/post`)
      const data = await res.json()
      setPostApi(data.post)
    }
    ApiPost()

  }, [])
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/post`).then(res => res.json()).then(result => {
  //     setPostApi(result)
  //   })
  // }, [])
  const handleDetele = async (id) => {
    const res = await fetch(`${apiUrl}/api/post/${id}`, {
      method: "DELETE"
    })
    window.location.reload()
    console.log(id);
  }


  return (
    <main className="container mx-auto ">
      <h1 className="m-5">Next Js Crud + MongoDB</h1>
      <div className="m-5">
        <Link href='create' className="bg-green-500 text-white py-2 px-3 rounded-sm ">Create Post</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 m-5 sm:m-0 gap-5 justify-center items-center">
        {postApi &&
          postApi.map((e) => (
            <div className=" p-5 rounded-lg shadow-xl  h-full" key={e._id}>
              <h1>{e.title}</h1>
              <div className="w-full sm:h-96  md:h-36 lg:h-56">
                <img src={e.img} alt="" className="w-full h-full  object-cover" />
              </div>

              <article className="text-wrap">
                <h1 className="text-ellipsis overflow-hidden  text-wrap ...">
                  {e.content}
                </h1>
              </article>
              <div className="flex  gap-2">
                <Link href={`edit/${e._id}`}>
                  <button className="py-2 px-3 bg-slate-500 text-white rounded-md">
                    Edit
                  </button>
                </Link>
                <button
                  className="py-2 px-3 bg-red-500 text-white rounded-md"
                  onClick={() => handleDetele(e._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        }

      </div>
    </main>
  );
}
