import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import ChatCompletionRequestMessage from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations. You can also ask for more information if needed.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse({
        status: 401,
        text: "Unauthorized",
      } as any);
    }

    if (openai.apiKey === undefined) {
      return new NextResponse({
        status: 500,
        text: "OpenAI API Key is not set",
      } as any);
    }

    if (!messages) {
      return new NextResponse({
        status: 400,
        text: "Messages is required",
      } as any);
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    console.log(response);

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error(error);
    return new NextResponse({
      status: 500,
      text: "CODE_Error",
    } as any);
  }
}
