import { mockPortfolioData } from "@/lib/data/portfolioData";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // Simulate API network latency (300ms)
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(mockPortfolioData);
}
