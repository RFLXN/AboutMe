"use client";

import { type ReactNode, useRef } from "react";
import useScrollSnap from "../hook/scroll-snap";
import { ActionIcon, Affix } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

export type ScrollSnapContainerProps = {
    children: ReactNode,
    withTopButton?: boolean
};


export function ScrollSnapContainer({ children, withTopButton }: Readonly<ScrollSnapContainerProps>) {
    const ref = useRef<HTMLDivElement>(null);
    const [ bind, unbind ] = useScrollSnap(ref, {
        snapDestinationY: "100%"
    });


    return <>
        <div ref={ ref } style={ {
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            overflow: "auto",
            width: "100%",
            height: "94%"
        } }
        >
            {children}
        </div>
        {withTopButton
            ? <Affix position={ { bottom: 20, right: 20 } }>
                <ActionIcon size="xl" variant="gradient" gradient={ { from: "lime", to: "teal" } }
                    onClick={ () => ref.current.scrollTo({ top: 0, behavior: "smooth" }) }
                >
                    <IconArrowUp size={ 24 } />
                </ActionIcon>
            </Affix>
            : null}
    </>;
}

export type ScrollSnapElementProps = {
    children: ReactNode
};

export function ScrollSnapElement({ children }: Readonly<ScrollSnapElementProps>) {
    return <div style={ {
        display: "flex",
        position: "relative",
        width: "100%",
        boxSizing: "border-box"
    } }
    >
        {children}
    </div>;
}
