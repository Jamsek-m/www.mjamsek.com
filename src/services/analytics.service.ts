import ReactGA from "react-ga";
import { ANALYTICS_CONFIG } from "../config/analytics.config";

export class AnalyticsService {
    
    private static INSTANCE: AnalyticsService | null = null;
    
    public static getInstance(): AnalyticsService {
        if (AnalyticsService.INSTANCE === null) {
            AnalyticsService.INSTANCE = new AnalyticsService();
        }
        return AnalyticsService.INSTANCE;
    }
    
    private constructor() {
        ReactGA.initialize(ANALYTICS_CONFIG.trackingCode);
    }
    
    public trackPageView() {
        if (typeof window !== "undefined") {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }
    
}
