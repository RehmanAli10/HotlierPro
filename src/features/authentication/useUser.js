import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data: user, isLoading, error } = useQuery();
}
