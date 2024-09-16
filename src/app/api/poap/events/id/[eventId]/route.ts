import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import poapXyzService from '../../../../services/poapxyz/poapxyz.service';

const getEventById = async (request: NextRequest) => {
  const params = request.nextUrl.pathname;
  // assumes /api/poap/events/id/[eventId]
  const eventId = request.nextUrl.pathname.split('/')[5];

  const response = await poapXyzService.getEventById(eventId);

  return NextResponse.json(response, { status: 200 });
};

export const GET = getEventById;
