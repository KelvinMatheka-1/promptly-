// pages/api/my-data.js
export async function GET(req) {
 const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob K'}
 ];

 return new Response(JSON.stringify(users))
}
