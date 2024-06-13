import { ReactNode } from "react";
import { Container } from "@mantine/core";
import classes from "./main.module.css";

export type SectionContainerProps = {
    children: ReactNode
};

export default function SectionContainer({ children }: Readonly<SectionContainerProps>) {
    return <div className={ classes.wrapper }>
        <Container w="100%" className={ classes.inner }>
            {children}
        </Container>
    </div>;
}
