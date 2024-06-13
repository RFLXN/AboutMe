import SectionContainer from "./container";
import SectionTitle from "./section-title";
import { SimpleGrid } from "@mantine/core";
import { ProjectPreview, ProjectPreviewProps, ProjectPreviewSkeleton } from "./project-preview";
import { Suspense } from "react";

const ProjectList: ProjectPreviewProps[] = [
    {
        url: "https://github.com/RFLXN/6th-umc-node-ts",
        description: "6th UMC에서 Node.js 팀장을 맡았는데, 중앙에서 지급된 워크북에 더해서 개인적으로 제작한 타입스크립트 기반의 워크북을 추가로 진행했습니다."
    },
    {
        url: "https://github.com/RFLXN/AboutMe",
        description: "지금 보고계신 사이트의 소스코드입니다. Next.js기반에 Mantine으로 UI를 구성했습니다."
    },
    {
        url: "https://github.com/RFLXN/JisakuPC",
        description: "팀으로 진행했던 일본 유학 졸업작품입니다. 스프링도 아닌 JSP(!!)를 이용했던 범상치 않은 프로젝트입니다..."
    },
    {
        url: "https://github.com/InnoSage/front-end",
        description: "얼마 전에 끝난, 캡스톤 프로젝트(졸업작품)의 FE 레포입니다. 프론트가 가능한 팀원이 저 혼자뿐이라서 제가 FE를 담당했었습니다. "
            + "Next.js에 MantineUI를 사용한건 똑같고, 여기에 AG Grid라는 테이블 라이브러리와 Zustand라는 상태관리 라이브러리를 추가로 사용했습니다."
    },
    {
        url: "https://github.com/BOOPINION/Vote-BE",
        description: "PnP라는 외대 내부의 학회(그냥 동아리라고 보시면 될듯)가 있는데, 여기서 진행중인 팀 프로젝트입니다. NestJS 기반으로 백엔드 개발을 진행중입니다."
    }
];

export default function ProjectSection() {
    return <SectionContainer>
        <SectionTitle title="Project" />
        <SimpleGrid cols={ { base: 1, sm: 2 } } mt="4rem">

            {ProjectList.map(({ url, description }, i) => <Suspense key={ i } fallback={ <ProjectPreviewSkeleton /> }>
                <ProjectPreview url={ url } description={ description } />
            </Suspense>)}

        </SimpleGrid>
    </SectionContainer>;
}
