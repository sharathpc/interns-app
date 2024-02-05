import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET() {
    const result = await prisma.product.findMany();
    return NextResponse.json(result, { status: 200 })
}