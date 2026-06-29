import { supabase } from "@/app/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET /api/transactions
export async function GET() {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .order("date", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}

// POST /api/transactions
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("body:", body); // 추가

  const { data, error } = await supabase
    .from("transactions")
    .insert([body])
    .select()
    .single();

  if (error) {
    console.log("supabase error:", error); // 추가
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

// DELETE /api/transactions?id=1
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ error: "id가 필요합니다." }, { status: 400 });

  const { error } = await supabase
    .from("transactions")
    .delete()
    .eq("trx_id", Number(id));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}