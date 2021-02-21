import { DomTrackingContainerProps } from './DomTrackingContainer';

export function shouldSizedContainerUpdate<P extends DomTrackingContainerProps>(
    prevProps: Readonly<P>,
    { x, y, width, height }: Readonly<P>
): boolean {
    const delta = 2;
    return (
        Math.abs(x - prevProps.x) > delta ||
        Math.abs(y - prevProps.y) > delta ||
        Math.abs(width - prevProps.width) > delta ||
        Math.abs(height - prevProps.height) > delta
    );
}
