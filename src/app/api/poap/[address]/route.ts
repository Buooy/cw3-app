// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import qs from 'qs';

import poapXyzService from '../../services/poapxyz/poapxyz.service';

const getUserPoaps = async (request: NextRequest) => {
  const params = request.nextUrl.pathname;
  // assumes /api/poap/0xADDRESS
  const address = request.nextUrl.pathname.split('/')[3];

  const response = await poapXyzService.getUserPoaps({
    address: address as `0x${string}`,
  });

  return NextResponse.json(response, { status: 200 });
};

export const GET = getUserPoaps;
