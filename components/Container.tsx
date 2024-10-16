import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

type Props = {
  header: string;
  children: React.ReactNode;
};

function Container({ header, children }: Props) {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        marginX: "auto",
        color: "#fff",
      }}
    >
      <Stack spacing={4}>
        {header && (
          <Link
            href={{
              pathname: "/category",
              query: { q: header, page: 1 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                paddingX: { xs: "20px", md: 0 },
                maxWidth: "1366px",

                width: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: { xs: "20px", md: "0" },
                  top: "100%",
                  height: "5px",
                  width: "100px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                textTransform="uppercase"
              >
                {header}
              </Typography>
            </Box>
          </Link>
        )}
        {children}
      </Stack>
    </Box>
  );
}

export default Container;
