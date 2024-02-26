//  si non connecté, on redirige vers la page login
//  on ne peut pas utiliser next/navigation qui est coté client car nous sommes coté server ici
// on utilise alors la request

//  on utlise une dépendance pour gérer les cookies car nous en avons besoin coté server également
// pas seulement coté client comme dans React

import { getCookie, hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  let isAuthenticated = false;

  // is invited ?
  // cookie guest est il présent dans les cookies de l'utilisateur ?
  if (hasCookie("guest", { cookies })) {
    // on recupère sa valeur
    const guestCookieValue = getCookie("guest", { cookies });
    if (guestCookieValue === "true") {
      // Si la valeur est "true", l'utilisateur est authentifié
      isAuthenticated = true;
    }
  }

  // if connected ?

  // if authenticated ?
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/"] };
