import { getPortfolioData } from "@/lib/data/portfolioData";
import { PortfolioData } from "@/lib/types/portfolio";
import { useLanguage } from "@/providers/LanguageProvider";
import { useQuery } from "@tanstack/react-query";

async function fetchPortfolioData(lang: "vi" | "en"): Promise<PortfolioData> {
  if (typeof window === "undefined") {
    return getPortfolioData(lang);
  }
  const res = await fetch(`/api/portfolio?lang=${lang}`);
  if (!res.ok) {
    return getPortfolioData(lang);
  }
  return res.json();
}

export function usePortfolioData() {
  const { lang } = useLanguage();

  return useQuery<PortfolioData>({
    queryKey: ["portfolio-data", lang],
    queryFn: () => fetchPortfolioData(lang),
    staleTime: 1000 * 60 * 5,
  });
}
