import {ObjectSize, ObjectSizeScale} from "@protorians/widgets";

export function getObjectSize(size: ObjectSize | number, scale: ObjectSizeScale | number = 1): number | null {
    switch (size) {
        case ObjectSize.ExtraSmall:
            return 16 * scale;

        case ObjectSize.Small:
            return 32 * scale;

        case ObjectSize.Medium:
            return 38.4 * scale;

        case ObjectSize.Large:
            return 51.2 * scale;

        case ObjectSize.ExtraLarge:
            return 80 * scale;

        case ObjectSize.Full:
            return null;

        default:
            return size * 4;
    }
}