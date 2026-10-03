import { getPortfolioData } from "@/lib/data/portfolioData";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const langParam = searchParams.get("lang") === "en" ? "en" : "vi";

  // Simulate API network latency (150ms)
  await new Promise((resolve) => setTimeout(resolve, 150));

  const data = getPortfolioData(langParam);
  return NextResponse.json(data);
}
