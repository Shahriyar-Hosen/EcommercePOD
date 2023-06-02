import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authentication } from "next-firebase-auth-edge/lib/next/middleware";
import { serverConfig } from "./firebase/server-config";

export async function middleware(request: NextRequest) {
  return authentication(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    apiKey: serverConfig.firebaseApiKey,
    cookieName: "AuthToken",
    cookieSignatureKeys: ["secret1", "secret2"],
    cookieSerializeOptions: {
      path: "/",
      httpOnly: true,
      secure: false, // Set this to true on HTTPS environments
      sameSite: "strict" as const,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
    },
    serviceAccount: serverConfig.serviceAccount,
    handleValidToken: async ({ token, decodedToken }) => {
      console.log("Successfully authenticated", { token, decodedToken });
      return NextResponse.next();
    },
    handleError: async (error) => {
      console.error("Oops, this should not have happened.", { error });
      return NextResponse.next();
    },
  });
}

export const config = {
  matcher: ["/", "/((?!_next/static|favicon.ico|logo.svg).*)"],
};
