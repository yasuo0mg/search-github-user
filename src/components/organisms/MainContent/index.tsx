import React, { useState } from "react";

import { SunIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";

import { GithubIcon } from "@components/atom/Icon/GithubIcon";
import { SearchForm } from "@components/molecules/Form/SearchForm";
import { UserResultList } from "@components/molecules/Result/UserResultList";
import { useFetchUsers } from "@hooks/useFetchUsers";

export const MainContent = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { data, isLoading, fetchUsers } = useFetchUsers();
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Container>
        <Flex mt={10} align="flex-end">
          <Heading mr={3}>Search Github Users</Heading>
          <Link href="https://github.com/omoriyasuo/sgu" isExternal>
            <IconButton
              mr={1}
              size="sm"
              aria-label="Go to creator github page"
              icon={<GithubIcon />}
            />
          </Link>
          <IconButton
            mr={1}
            size="sm"
            aria-label="switch color mode"
            icon={<SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <SearchForm setIsSubmitted={setIsSubmitted} fetchUsers={fetchUsers} />
        <UserResultList
          data={data}
          isLoading={isLoading}
          isSubmitted={isSubmitted}
        />
      </Container>
    </>
  );
};
