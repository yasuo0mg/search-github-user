import React, { useCallback, useEffect } from "react";

import { FormControl, InputGroup } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

import { SearchButton } from "@components/atom/Form/Button";
import { InputField } from "@components/atom/Form/InputField";

type Props = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  fetchUsers: (query: string) => Promise<void>;
};

type FormType = {
  inputText: string;
};

export const SearchForm = ({ setIsSubmitted, fetchUsers }: Props) => {
  const {
    handleSubmit,
    control,
    errors,
    getValues,
    formState: { isSubmitSuccessful },
  } = useForm<FormType>();

  const values = getValues("inputText");

  useEffect(() => {
    setIsSubmitted(isSubmitSuccessful);
  }, [setIsSubmitted, isSubmitSuccessful]);

  const onSubmit = useCallback(
    (data: FormType) => {
      fetchUsers(data.inputText);
    },
    [fetchUsers]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.inputText && !values}>
        <InputGroup>
          <Controller
            as={<InputField placeholder="Type a name..." variant="filled" />}
            control={control}
            name="inputText"
            defaultValue=""
            rules={{ required: true }}
          />
          <SearchButton type="submit" variant="solid" text="Search" />
        </InputGroup>
      </FormControl>
    </form>
  );
};
