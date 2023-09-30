import { StyledTypography as Typography } from "./styled";

type TitleProps = {
  label: string;
};

/** Render Title in Image
 * @param {string} label title label
 */
export const Title = (data: TitleProps) => {
  const { label } = data;

  return <Typography>{label}</Typography>;
};
