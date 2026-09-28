import { mockPortfolioData } from "@/lib/data/portfolioData";
import { PortfolioData } from "@/lib/types/portfolio";
import { useQuery } from "@tanstack/react-query";

async function fetchPortfolioData(): Promise<PortfolioData> {
  if (typeof window === "undefined") {
    return mockPortfolioData;
  }
  const res = await fetch("/api/portfolio");
  if (!res.ok) {
    throw new Error("Failed to fetch portfolio data from API");
  }
  return res.json();
}

export function usePortfolioData() {
  return useQuery<PortfolioData>({
    queryKey: ["portfolio-data"],
    queryFn: fetchPortfolioData,
    staleTime: 1000 * 60 * 5,
  });
}
