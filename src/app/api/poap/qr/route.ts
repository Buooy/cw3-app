// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import qs from 'qs';

import poapXyzService from '../../services/poapxyz/poapxyz.service';

const getQrCodes = async (request: NextRequest) => {
  const { url } = request;
  const searchIndex = url.search(/\?/);

  if (searchIndex === -1) {
    return NextResponse.json(
      {
        message: 'No Event Hash',
      },
      {
        status: 400,
      }
    );
  }

  const { hash } = qs.parse(url.slice(url.search(/\?/) + 1, url.length + 1));
  const codes = await poapXyzService.getClaimQrCode({ hash });

  return NextResponse.json({ name: 'asdasd' }, { status: 200 });
};

export const GET = getQrCodes;
