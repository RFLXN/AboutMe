import SectionContainer from "./container";
import { Flex, SimpleGrid, Text } from "@mantine/core";
import { IconCake, IconSchool } from "@tabler/icons-react";
import Image from "next/image";
import ProfileIcon from "./profile-icon";
import SectionTitle from "./section-title";

export default function ProfileSection() {
    return <SectionContainer>
        <SectionTitle title="Profile" />

        <SimpleGrid cols={ { base: 1, sm: 2 } } mt="4rem">
            <Flex direction="column">
                <Image src="/penguin.png" alt="Chuni-Penguin" width={ 300 } height={ 300 } />
                <Text size="xs" c="dimmed">펭귄 좋아하시나요...?</Text>
            </Flex>
            <Flex direction="column" justify="center">
                <ProfileIcon icon={ <IconSchool size={ 24 } /> } value="한국외대 컴퓨터공학과 재학중" />
                <ProfileIcon icon={ <IconSchool size={ 24 } /> } value="東京テクニカルカレッジ 情報処理科 卒業" />
                <ProfileIcon icon={ <IconCake size={ 24 } /> } value="2001.01.03" />
            </Flex>
        </SimpleGrid>
        <Text size="lg" mt="md">
            중학생 시절부터 코딩을 시작해서 지금까지고 계속하고 있는 코딩에 진심인 사람입니다. <br />
            취미는 코딩 / 게임 / 음악감상에 학과는 컴공이고 당연히 진로도 개발자를 지망하는, <br />
            삶이 컴퓨터 그 자체인 안타까운(...) 프로그래머입니다. <br />
            현재는 FE/BE 개발 뿐만 아니라 인프라쪽(DevOps쪽)에도 관심이 많아서 공부하고있습니다.
        </Text>
    </SectionContainer>;
}
