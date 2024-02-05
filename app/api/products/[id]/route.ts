import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const result = await prisma.product.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });
    return NextResponse.json(result, { status: 200 })
}