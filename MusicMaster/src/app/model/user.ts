import { Tutorial } from "./tutorial";

export interface User {
    userId: string;
    tutorials?: Tutorial[];
    partitions?: [];
}