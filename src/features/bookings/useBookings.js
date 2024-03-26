import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterdValue = searchParams.get("status");
  const filter =
    !filterdValue || filterdValue === "all"
      ? null
      : { field: "status", value: filterdValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  const bookings = data && data.data ? data.data : [];
  const count = data && data.count ? data.count : 0;

  return { bookings, isLoading, error, count };
}
