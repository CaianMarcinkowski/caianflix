import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req);

        const movies = await prismadb.movie.findMany();

        console.log("MV: "+movies);
        return res.status(200).json(movies);
    }catch (e) {
        console.log(e);
        return res.status(400).end();
    }
}