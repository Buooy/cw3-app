// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import qs from 'qs';

import poapXyzService from '../../services/poapxyz/poapxyz.service';

const getPoap = async (request: NextRequest) => {
  const { url } = request;
  const searchIndex = url.search(/\?/);

  if (searchIndex === -1) {
    return NextResponse.json(
      {
        message: 'No Event Id',
      },
      {
        status: 400,
      }
    );
  }

  const { eventId, address } = qs.parse(
    url.slice(url.search(/\?/) + 1, url.length + 1)
  );

  const response = await poapXyzService.getUserPoapByEvent({
    address: address as `0x${string}`,
    eventId: eventId as string,
  });

  return NextResponse.json(response, { status: 200 });
};

export const GET = getPoap;
