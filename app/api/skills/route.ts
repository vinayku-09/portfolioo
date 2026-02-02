import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";

export async function GET() {
  try {
    const skills = await storage.getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}
