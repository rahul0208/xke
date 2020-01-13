import { Route } from "@angular/router";

export interface RouteInfo {
    route: Route;
    title: string;
    icon: string;
    class?: string;
    position: string[];
}