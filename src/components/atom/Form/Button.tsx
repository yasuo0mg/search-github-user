import React from "react";

import { Button } from "@chakra-ui/react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  colorScheme?: string;
  variant: string;
  text: string;
};

export const SearchButton = ({
  type,
  colorScheme = "teal",
  variant,
  text,
}: ButtonProps) => (
  <Button
    type={type}
    colorScheme={colorScheme}
    size="lg"
    variant={variant}
    my={6}
  >
    {text}
  </Button>
);
