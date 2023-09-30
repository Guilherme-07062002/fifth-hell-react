import Typography from "@mui/material/Typography";

type TitleProps = {
  label: string;
};

/** Render Title in Image */
export const Title = (data: TitleProps) => {
  const { label } = data;

  return (
    <Typography
      textAlign={"left"}
      sx={{
        marginLeft: 3,
        paddingY: 1,
        color: "white",
        fontSize: "2rem",
        position: "absolute",
      }}
    >
      {label}
    </Typography>
  );
};
