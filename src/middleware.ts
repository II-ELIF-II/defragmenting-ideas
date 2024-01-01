import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware (req) {
    // console.log(req.nextauth);
  
    //Check if user has admin access
    if (req.nextUrl.pathname === "/login/admin" && !req.nextauth.token?.isAdmin)
    {
      return new NextResponse("not authorized");
    }

    if (req.nextUrl.pathname === "/login/admin/editorPost" && !req.nextauth.token?.isAdmin)
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
    "/login/admin",
    "/login/admin/editorPost"
  ],
};