
import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../../../lip/mongodb'
import Post from '../../../../../models/post'



export async function GET(req,{ params }) {
    const { id } = params
    await connectMongoDB()
    const post = await Post.findOne({ _id: id })
    return NextResponse.json({post},{status:201})
}