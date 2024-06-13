import SectionContainer from "./container";
import { Flex, SimpleGrid, Text, Title } from "@mantine/core";
import StackIcon from "./stack-icon";
import {
    IconBox,
    IconBrandApple,
    IconBrandAws,
    IconBrandCpp,
    IconBrandDeno,
    IconBrandDocker,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTypescript,
    IconCoffee,
    IconFileText,
    IconFlask,
    IconLeaf,
    IconServer2,
    IconSql
} from "@tabler/icons-react";
import SectionTitle from "./section-title";

export default function StackSection() {
    return <SectionContainer>
        <SectionTitle title="Stack" />
        <Text size="xl" c="dimmed">Level 1~10</Text>
        <SimpleGrid cols={ { base: 2, sm: 3 } } spacing={ 0 } mt="6rem" mb="8rem">
            <Flex direction="column" mb="lg">
                <Title order={ 3 } mb="sm">Language</Title>
                <StackIcon icon={ <IconBrandJavascript size={ 16 } /> } value="Javascript [8]" />
                <StackIcon icon={ <IconBrandTypescript size={ 16 } /> } value="Typescript [8]" />
                <StackIcon icon={ <IconBrandPython size={ 16 } /> } value="Python [6]" />
                <StackIcon icon={ <IconCoffee size={ 16 } /> } value="Java [6]" />
                <StackIcon icon={ <IconBrandCpp size={ 16 } /> } value="C / C++ [4]" />
            </Flex>
            <Flex direction="column" mb="lg">
                <Title order={ 3 } mb="sm">Backend</Title>
                <StackIcon icon={ <IconBrandNodejs size={ 16 } /> } value="Express.js / NestJS [7]" />
                <StackIcon icon={ <IconBrandDeno size={ 16 } /> } value="Deno [5]" />
                <StackIcon icon={ <IconFlask size={ 16 } /> } value="Flask [5]" />
                <StackIcon icon={ <IconLeaf size={ 16 } /> } value="Spring Framework [4]" />
            </Flex>
            <Flex direction="column" mb="lg">
                <Title order={ 3 } mb="sm">Frontend</Title>
                <StackIcon icon={ <IconBrandReact size={ 16 } /> } value="React [6]" />
                <StackIcon icon={ <IconBrandNextjs size={ 16 } /> } value="Next.js [7]" />
            </Flex>
            <Flex direction="column" mb="lg">
                <Title order={ 3 } mb="sm">Database</Title>
                <StackIcon icon={ <IconBrandMysql size={ 16 } /> } value="MySQL [7]" />
                <StackIcon icon={ <IconSql size={ 16 } /> } value="SQLite [7]" />
                <StackIcon icon={ <IconBox size={ 16 } /> } value="Redis [4]" />
            </Flex>
            <Flex direction="column" mb="lg">
                <Title order={ 3 } mb="sm">Infrastructure ・ CI/CD</Title>
                <StackIcon icon={ <IconBrandGithub size={ 16 } /> } value="Git / Github [7]" />
                <StackIcon icon={ <IconBrandDocker size={ 16 } /> } value="Docker [7]" />
                <StackIcon icon={ <IconBrandAws size={ 16 } /> } value="AWS [5]" />
            </Flex>
            <Flex direction="column" mb="lg">
                <Title order={ 3 } mb="sm">Environment</Title>
                <StackIcon icon={ <IconBrandApple size={ 16 } /> } value="Laptop: Macbook Pro M1" />
                <StackIcon icon={ <IconFileText size={ 16 } /> } value="Main IDE: Webstorm / VSCode" />
                <StackIcon icon={ <IconServer2 size={ 16 } /> } value="Private home server: Ubuntu" />
            </Flex>
        </SimpleGrid>
    </SectionContainer>;
}
