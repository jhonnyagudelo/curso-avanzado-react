import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UseCredentials!) {
    signup(input: $input)
  }
`;

const useRegisterMutation = () => {
  const [registerMutation] = useMutation(REGISTER);
  return { registerMutation };
};

export { useRegisterMutation };
