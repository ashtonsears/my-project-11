import './Grid.css';

const Grid = ({ disorder, onClick }) => {
  const imageSrc = `https://sleep-tracker-server.onrender.com/${disorder.image}`;

  return (
    <section className="disorder" onClick={onClick}>
      <h4>{disorder.name}</h4>
      <div className="grid_img">
        <img src={imageSrc} alt={disorder.name} />
      </div>
    </section>
  );
};

export default Grid;