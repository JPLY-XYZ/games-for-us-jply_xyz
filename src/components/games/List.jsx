import Card from "./Card";

function List() {
  return (
    <div className=" mx-auto grid disenio grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <Card platforms={[4, 186, 13]} title="Gta retard 2025" releaseDate="2025-01-01" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Vs4X9lF0lcuQhbseIa8Sn1DS-Nl6eK2WOA&s" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card mediaQuery="hidden sm:block md:block xl:block 2xl:hidden" />
      <Card mediaQuery="hidden sm:hidden md:hidden xl:block 2xl:hidden" />
      <Card mediaQuery="hidden sm:hidden md:hidden xl:block 2xl:hidden" />
    </div>
  );
}

export default List;
