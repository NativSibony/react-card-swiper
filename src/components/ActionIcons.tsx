import { SvgIcon, SvgIconProps } from "@mui/material";

export function CheckIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12.6111L8.92308 17.5L20 6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export function UnCheckIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
}
