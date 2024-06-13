"use client";

import useSWR from "swr";

// @ts-ignore
const fetcher = (url: string) => fetch(url, { cache: "no-cache" }).then((res) => res.json());

export default function useViewerCount() {
    const { data, error, isLoading } = useSWR("/api/viewer", fetcher, { refreshInterval: 1000 });

    return {
        viewerCount: data?.count as number | undefined,
        isError: error as Error,
        isLoading
    };
}
