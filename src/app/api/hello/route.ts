// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';

// This is okay
export const GET = () => {
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
};

// This is better
const getResponse = () => {
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
};

export default {
  GET: getResponse,
};
