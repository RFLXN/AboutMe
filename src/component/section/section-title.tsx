import { Text, Title } from "@mantine/core";

export type SectionTitleProps = {
    title: string
};

export default function SectionTitle({ title }: Readonly<SectionTitleProps>) {
    return <Title>
        <Text variant="gradient" gradient={ { from: "lime", to: "teal" } } inherit>
            {title}
        </Text>
    </Title>;
}
