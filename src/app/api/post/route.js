import {connectMongoDB} from '../../../../lip/mongodb'
import Post from '../../../../models/post'
import { NextResponse } from 'next/server'


export async function POST(req) {
    const { title, img, content } = await req.json();
    console.log(title, img, content)
  
    return NextResponse.json({ message: "Post created"}, {status: 201 })
}
