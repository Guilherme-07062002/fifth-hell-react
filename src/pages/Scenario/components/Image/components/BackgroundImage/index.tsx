import { StyledBackgroundImage as Box } from "./styled";

type BackgroundImageProps = {
  src: string;
};

/** Render background image
 * @param {string} src image source
 */
export const BackgroundImage = (data: BackgroundImageProps) => {
  const { src } = data;
  return <Box component="img" src={src} />;
};
