export async function GET() {
  // Simulate a delay between 1 to 5 seconds
  const delay = Math.floor(Math.random() * 5000) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return Response.json({
    success: true,
    data: "Hello from route handler example 1",
  });
}
