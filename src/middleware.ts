import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware (req) {
    console.log(req.nextauth);
    if (req.nextUrl.pathname === "/login/admin" && !req.nextauth.token?.isAdmin)
    {
      return new NextResponse("not authorized");
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/login/admin"
  ],
};