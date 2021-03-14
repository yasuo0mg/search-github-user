import React, { InputHTMLAttributes } from "react";

import { Input } from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant: string;
  placeholder: string;
};

const InputField = ({
  value,
  onChange,
  variant,
  placeholder,
}: InputFieldProps) => {
  return (
    <Input
      type="text"
      value={value}
      size="lg"
      onChange={onChange}
      placeholder={placeholder}
      variant={variant}
      focusBorderColor="teal.300"
      my={6}
    />
  );
};

export { InputField };
