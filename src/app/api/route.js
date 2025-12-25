export const feedback =[
  {
    id:1,
    message: "Nice Food"
  },
  {
    id:2,
    message: "Waiter behavior not good "
  },
]


export async function GET(request) {
  return Response.json({
    status: 200,
    message:"Yahoo.Api Created"
  })
}