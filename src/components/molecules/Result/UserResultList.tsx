import React from "react";

import { Alert, AlertIcon, Container, Spinner } from "@chakra-ui/react";

import { UserResult } from "./UserResult";

interface Items {
  avatar_url: string;
  html_url: string;
  login: string;
}

interface DataType {
  total_count: number;
  incomplete_results: boolean;
  items: Items[];
}

type Props = {
  data: DataType;
  isLoading: boolean;
  isSubmitted: boolean;
};

const UserResultList = ({ data, isLoading, isSubmitted }: Props) => {
  if (isLoading) {
    return (
      <Container centerContent>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.300"
          size="xl"
        />
      </Container>
    );
  }

  return (
    <>
      {isSubmitted && !data.items.length ? (
        <Alert status="warning">
          <AlertIcon />
          No match results. Try different names!
        </Alert>
      ) : (
        <>
          {data.items.map((item, i) => {
            return (
              <UserResult
                key={i}
                avatarUrl={item.avatar_url}
                githubLink={item.html_url}
                name={item.login}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export { UserResultList };
