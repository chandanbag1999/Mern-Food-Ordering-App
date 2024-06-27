import { Restaurant } from "@/types/type";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurants = () => {
  const { getAccessTokenSilently } = useAuth0();
  
  const createMyRestaurantsRequest = async ( restaurantFormData: FormData): Promise<Restaurant> => {
    const access_token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/v1/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      body: restaurantFormData
    });
    if (!response.ok) {
      throw new Error("Unable to create restaurant");
    };

    return response.json();
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyRestaurantsRequest);

  if (isSuccess) {
    toast.success("Restaurant created successfully");
  };

  if (error) {
    toast.error("Unable to create restaurant");
  };

  return {
    createRestaurant,
    isLoading,
  };
}; 