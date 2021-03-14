import React from "react";

import { Avatar, Center, Flex, Link, Text } from "@chakra-ui/react";

type Props = {
  avatarUrl: string;
  githubLink: string;
  name: string;
};

const UserResult = ({ avatarUrl, githubLink, name }: Props) => {
  return (
    <Link href={githubLink} isExternal>
      <Flex mb={6}>
        <Avatar src={avatarUrl} />
        <Center>
          <Text fontSize="xl" pl={6}>
            {name}
          </Text>
        </Center>
      </Flex>
    </Link>
  );
};

export { UserResult };
