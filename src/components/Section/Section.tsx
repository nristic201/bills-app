import { Box, Stack, Typography } from "@mui/material";
import { sectionContentStyle, sectionTitleStyle } from "./Section.styles";

interface ISectionProps extends React.PropsWithChildren {
  title: string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const { title, children } = props;
  return (
    <Stack gap={"8px"} flexDirection={"column"}>
      <Typography variant="h3" component={"h3"} sx={sectionTitleStyle}>
        {title}
      </Typography>
      <Box sx={sectionContentStyle}> {children}</Box>
    </Stack>
  );
};
