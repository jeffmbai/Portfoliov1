import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const RESUME_FILENAME = "GoffreyMbaiResume.pdf"

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "assets", RESUME_FILENAME)

  try {
    const fileBuffer = fs.readFileSync(filePath)
    const response = new NextResponse(fileBuffer)

    response.headers.set("Content-Type", "application/pdf")
    response.headers.set("Content-Disposition", `attachment; filename="${RESUME_FILENAME}"`)

    return response
  } catch (error) {
    console.error("Error reading resume file:", error)
    return new NextResponse("Resume file not found", { status: 404 })
  }
}
