
import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../../../lip/mongodb'
import Post from '../../../../../models/post'



export async function GET(req, { params }) {
    const { id } = params
    await connectMongoDB()
    const post = await Post.findOne({ _id: id })
    return NextResponse.json({ post }, { status: 201 })
}

export async function PUT(req, { params }) {
    const { id } = params
    const { title, img, content } = await req.json()
    await connectMongoDB()
    await Post.findByIdAndUpdate(id, { title, img, content })
    return NextResponse.json({ massage: "Post Update" }, { status: 200 })

}

export async function DELETE(req, { params }) {
    const { id } = params
    await connectMongoDB()
    await Post.findByIdAndDelete(id)
    return NextResponse.json({ massage: "Delete Complete" }, { status: 200 })
}