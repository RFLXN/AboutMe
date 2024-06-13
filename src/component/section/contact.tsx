import { SimpleGrid } from "@mantine/core";
import SectionContainer from "./container";
import ContactIcon, { ContactIconProps } from "./contact-icon";
import { IconAt, IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";
import SectionTitle from "./section-title";


const ContactList: ContactIconProps[] = [
    {
        icon: <IconAt size={ 32 } />,
        title: "Email (Personal)",
        value: "solid2113@naver.com"
    },
    {
        icon: <IconAt size={ 32 } />,
        title: "Email (University)",
        value: "rflxn2113@hufs.ac.kr"
    },
    {
        icon: <IconBrandGithub size={ 32 } />,
        title: "Github",
        value: "https://github.com/RFLXN",
        isLink: true
    },
    {
        icon: <IconBrandDiscord size={ 32 } />,
        title: "Discord",
        value: "@rflxn"
    }
];

export default function ContactSection() {
    return <SectionContainer>
        <SectionTitle title="Contact" />
        <SimpleGrid cols={ { base: 1, sm: 2 } } spacing={ 0 } mt="6rem" mb="8rem">
            {ContactList.map(({ icon, title, value, isLink }, i) =>
                <ContactIcon key={ i } icon={ icon } title={ title } value={ value } isLink={ isLink } />)}
        </SimpleGrid>
    </SectionContainer>;
}
