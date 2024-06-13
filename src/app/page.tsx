import Header from "../component/header/header";
import { ScrollSnapContainer, ScrollSnapElement } from "../component/scroll-snap";
import MainSection from "../component/section/main";
import ContactSection from "../component/section/contact";
import ProfileSection from "../component/section/profile";
import StackSection from "../component/section/stack";
import ProjectSection from "../component/section/project";


export default function HomePage() {
    return <>
        <Header />
        <ScrollSnapContainer withTopButton>
            <ScrollSnapElement>
                <MainSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <ProfileSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <StackSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <ProjectSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <ContactSection />
            </ScrollSnapElement>
        </ScrollSnapContainer>
    </>;
}
