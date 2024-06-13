"use client";

import useViewerCount from "../../hook/viewer-count";
import { Skeleton, Text } from "@mantine/core";

export default function ViewerCount() {
    const { viewerCount, isError, isLoading } = useViewerCount();

    if (isError) {
        return <></>;
    }
    if (isLoading) return <Skeleton w="4rem" h="1rem" />;
    if (!viewerCount) return <></>;
    if (viewerCount === 0) return <></>;

    return <Text size="xs" c="dimmed">조회수: {viewerCount}</Text>;
}
