import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateUser = () => {
  const createUserRequest = async (user: createUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Unable to create user");
    };
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
}; 