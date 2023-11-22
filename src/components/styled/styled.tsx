import { Box, Card, Stack, styled } from "@mui/material";

export const MainWrapper = styled(Stack)(({ theme }) => ({
  position: "fixed",
  height: "100%",
  width: "100%",
  transformStyle: "preserve-3d",
  overflow: "hidden",
}));

export const FloatingActionWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
  paddingBottom: theme.spacing(5),
}));

export const CardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  margin: "auto",
  "&>*:nth-child(n + 1)": {
    "--i": "1",
  },
  "&>*:last-child": {
    "--i": "0",
  },
}));

export const CardContainer = styled(Card)(({ theme }) => ({
  position: "absolute",
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: "30px",
  height: "70%",
  boxShadow: "none",
  transform: "translateY(calc(45px * var(--i)))",
  scale: "calc(1 - 0.1 * var(--i))",
  filter: "drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.3))",
  cursor: "grab",
  userSelect: "none",
  transition: "all 0.5s",
  "& img": {
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
}));

// EXAMPLE
// export const BackgroundStack = styled(Stack)<BackgroundStackProps>(({ theme, bgimage }) => ({
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundImage: bgimage ? `url(${bgimage})` : 'none',
// }));
