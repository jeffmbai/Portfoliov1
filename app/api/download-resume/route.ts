import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  // Path to your PDF file
  const filePath = path.join(process.cwd(), 'app', 'assets', 'GeoffreyMbai.pdf')
  
  try {
    // Read the file
    const fileBuffer = fs.readFileSync(filePath)
    
    // Create a response with the file
    const response = new NextResponse(fileBuffer)
    
    // Set headers for download
    response.headers.set('Content-Type', 'application/pdf')
    response.headers.set('Content-Disposition', 'attachment; filename="GeoffreyMbai_Resume.pdf"')
    
    return response
  } catch (error) {
    console.error('Error reading file:', error)
    return new NextResponse('File not found', { status: 404 })
  }
}