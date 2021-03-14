import React from "react";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, AlertTitle, Button, Link } from "@chakra-ui/react";

type Props = {
  statusCode: number;
};

function Error({ statusCode }: Props) {
  return (
    <>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={6} fontSize="lg">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </AlertTitle>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            leftIcon={<ArrowBackIcon />}
            border="2px"
            borderColor="#FEB2B2"
            variant="outline"
          >
            Back to home page
          </Button>
        </Link>
      </Alert>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
