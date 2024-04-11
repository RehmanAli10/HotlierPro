import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateCurrentUser,
  });

  return { updateUser, isLoading };
}
