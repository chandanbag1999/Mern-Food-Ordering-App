import { User } from "@/types/type";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getUserRequest = async (): Promise<User> => {
    const access_token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    };

    return response.json();
  };

  const {
    data: CurrentUser,
    isLoading,
    error
  } = useQuery("fetchCurrentUser", getUserRequest); 

  if (error) {
    toast.error(error.toString());
  };

  return {
    CurrentUser,
    isLoading,
  };
};

type createUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: createUserRequest) => {
    const access_token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
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


type updateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateUserRequest = async (formData: updateUserRequest) => {
    const access_token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/v1/users/profile-update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Unable to update user");
    };

    return response.json();
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateUserRequest);

  if (isSuccess) {
    toast.success("User Profile updated successfully!");
  };

  if (error) {
    toast.error(error.toString());
    reset();
  };

  return {
    updateUser,
    isLoading
  };
  
};