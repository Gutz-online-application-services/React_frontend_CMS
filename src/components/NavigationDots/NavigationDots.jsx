import "./NavigationDots.scss";
function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "team", "career", "services", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#497d59" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
