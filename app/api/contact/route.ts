import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { insertContactMessageSchema } from "@/shared/schema";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const input = insertContactMessageSchema.parse(body);
    const message = await storage.createContactMessage(input);
    return NextResponse.json(message, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
