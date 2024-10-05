import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT * FROM DRIVERS`;

    return Response.json({ data: response });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error });
  }
}
