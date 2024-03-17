import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = new QueryClient();

  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: (updatedFormData) => updateSetting(updatedFormData),

    onSuccess: () => {
      toast.success("Settings successfully upated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => toast.error("Failed to update settings"),
  });
  return { updateSettings, isUpdating };
}
