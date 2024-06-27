import { useCreateMyRestaurants } from '@/api/RestaurantApi';
import ManageRestaurantForm from '@/forms/manage-resraurant-form/ManageRestaurant-form'

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurants();
  return (
    <ManageRestaurantForm 
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  )
}


// TODO: 7:47:19 - Get my Restaurant api