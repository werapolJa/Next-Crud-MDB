'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto ">
      <h1 className="m-5">Next Js Crud + MongoDB</h1>
      <div className="m-5">
        <Link href='create' className="bg-green-500 text-white py-2 px-3 rounded-sm ">Create Post</Link>
      </div>
      <div className="grid  sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 m-5 sm:m-0">
        <div className="shadow-xl p-5 rounded-lg">
          <h1>Post Title</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, incidunt?</h1>
          <div className="flex  gap-2">
            <button className="py-2 px-3 bg-slate-500 text-white rounded-md">Edit</button>
            <button className="py-2 px-3 bg-red-500 text-white rounded-md">Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
}
