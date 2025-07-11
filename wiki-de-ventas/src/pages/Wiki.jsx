import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import data from "../data/data.json"; // Assuming you have some data to display

const PageWiki = () => {
  return (
    <div className="page-wiki">
      <Search />
      <section className="cards">
        {data.map((item, index) => (
          <Card key={index} 
          title={item.title} 
          description={item.response} 
          nameFilter={item.nameFilter}
          id={item.id}
          />
        ))}
      </section>
    </div>
  );
};

export default PageWiki;
