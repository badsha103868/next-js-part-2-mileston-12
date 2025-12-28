import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  // request theka pathname ta nebo
  const {pathname} = request.nextUrl;
  console.log(pathname)
  if(!pathname.startsWith("/api/feedback")){
  return NextResponse.json({
      status:404
    })
  }
  // return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
   
export const config = {
  matcher: '/api/:path*',
}