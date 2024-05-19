import type { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  revalidateTag(
    'get::https://employee-dashboard-backend-main.onrender.com/api/employees',
  );
  return Response.json({ revalidated: true, now: Date.now() });
}
