import { Card, CardSection, Image, Skeleton, Text } from "@mantine/core";
import parse from "node-html-parser";
import Link from "next/link";

export type ProjectPreviewProps = {
    url: string,
    description: string
};

async function fetchSite(url: string) {
    const response = await fetch(url);
    const docs = parse(await response.text());
    const imageUrl = docs.querySelector("meta[property=\"og:image\"]")?.getAttribute("content");
    const siteTitle = docs.querySelector("meta[property=\"og:title\"]")?.getAttribute("content");
    return { imageUrl, siteTitle };
}

export async function ProjectPreview({ url, description }: Readonly<ProjectPreviewProps>) {
    const siteInfo = await fetchSite(url);
    return <Card component={ Link } href={ url } mih="24rem" shadow="sm" padding="lg" radius="md" withBorder>
        <CardSection>
            <Image src={ siteInfo.imageUrl } alt={ siteInfo.siteTitle } fit="cover" height={ 240 }
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
        </CardSection>
        <Text fw={ 500 } mt="md" mb="xs">{siteInfo.siteTitle}</Text>
        <Text size="sm" c="dimmed" mb="xs">{description}</Text>
    </Card>;
}

export function ProjectPreviewSkeleton() {
    return <Skeleton h="24rem" />;
}
