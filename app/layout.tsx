import "@/styles/globals.css";

import { Tokens } from "next-firebase-auth-edge/lib/auth";
import { filterStandardClaims } from "next-firebase-auth-edge/lib/auth/tenant";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { cookies } from "next/headers";

import { AuthProvider } from "@/auth/auth-provider";
import { Tenant } from "@/auth/types";
import { serverConfig } from "@/firebase/server-config";

const mapTokensToTenant = ({ decodedToken }: Tokens): Tenant => {
  const customClaims = filterStandardClaims(decodedToken);

  const {
    uid,
    email,
    email_verified: emailVerified,
    picture: photoURL,
    name: displayName,
  } = decodedToken;

  return {
    id: uid,
    email: email ?? null,
    customClaims,
    emailVerified: emailVerified ?? false,
    name: displayName ?? null,
    photoUrl: photoURL ?? null,
  };
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const tokens = await getTokens(cookies(), {
    serviceAccount: serverConfig.serviceAccount,
    apiKey: serverConfig.firebaseApiKey,
    cookieName: "AuthToken",
    cookieSignatureKeys: ["secret1", "secret2"],
  });

  const tenant = tokens ? mapTokensToTenant(tokens) : null;

  console.log("ROOT LAYOUT TOKENS", { tokens, tenant });

  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <AuthProvider defaultTenant={tenant}>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
