import { Container } from "./styles"
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder, ...props }: AvatarProps) {
    return (
        <Container>
            <img 
            {...props}
            className={hasBorder ? 'avatarWithBorder' : 'avatar'} 
            />
        </Container>
    )
}