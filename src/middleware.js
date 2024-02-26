//  si non connecté, on redirige vers la page login
//  on ne peut pas utiliser next/navigation qui est coté client car nous sommes coté server ici
// on utlise allors la request

import { NextResponse } from "next/server";

export function middleware(request) {
  let isAuthenticated = false;
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/"] };
