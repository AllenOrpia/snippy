import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connect from "@/lib/mongodb/connect";
import User from "@/lib/models/Users";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connect();
    const { userId } = req.body;
    const user = await User.findById(userId);

    return NextResponse.json(user, { status: 200})
  } catch (err: any) {
    return NextResponse.json({ error: err.message})
  }
};
