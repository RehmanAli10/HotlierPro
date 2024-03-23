import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // FILTER
  const filterdValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filterdValue === "all") filteredCabins = cabins;

  if (filterdValue === "no-discount")
    filteredCabins = cabins.filter((currCabin) => currCabin.discount === 0);

  if (filterdValue === "with-discount")
    filteredCabins = cabins.filter((currCabin) => currCabin.discount > 0);

  // SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(currCabin) => (
            <CabinRow cabin={currCabin} key={currCabin.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
