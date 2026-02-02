import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";

export async function GET() {
  try {
    const education = await storage.getEducation();
    return NextResponse.json(education);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch education" },
      { status: 500 }
    );
  }
}
