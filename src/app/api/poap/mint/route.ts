/* eslint-disable no-console */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import poapXyzService from '../../services/poapxyz/poapxyz.service';

const mintToWallet = async (request: NextRequest) => {
  // @todo validate user address through signing
  const { address, website } = await request.json();
  let response;

  try {
    response = await poapXyzService.mintToWallet({
      address,
      website,
    });

    if (response.statusCode >= 300) {
      throw new Error(response.message);
    }
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json(response, { status: 200 });
};

export const POST = mintToWallet;
