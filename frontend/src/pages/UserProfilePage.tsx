import { useGetUser, useUpdateUser } from "@/api/userApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";


export default function UserProfilePage() {
  const { CurrentUser, isLoading: isGetLoading } = useGetUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

  if (isGetLoading) {
    return <span>Loading...</span>
  };

  if (!CurrentUser) {
    return <span>Unable to load user profile</span>
  };

  return (
    <UserProfileForm 
      currentUser={CurrentUser}
      onSave={updateUser} 
      isLoading={isUpdateLoading}
    />
  )
}