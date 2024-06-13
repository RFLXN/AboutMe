"use client";

import { MutableRefObject, useEffect, useState } from "react";
import createScrollSnap, { ScrollSnapSettings } from "scroll-snap";

export default function useScrollSnap<T extends HTMLElement>(
    ref: MutableRefObject<T>,
    settings: ScrollSnapSettings,
    callback?: ()=> void
) {
    const [ scrollBind, setBind ] = useState(() => () => {});
    const [ scrollUnbind, setUnbind ] = useState(() => () => {});

    useEffect(() => {
        const element = ref.current;

        if (element) {
            const { bind, unbind } = createScrollSnap(element, settings, callback);
            setBind(() => bind);
            setUnbind(() => unbind);
        }
    }, []);

    return [ scrollBind, scrollUnbind ];
}
