import { createHash } from "crypto";

export function hash(target: string) {
    return createHash("sha256")
        .update(target)
        .digest("hex");
}
