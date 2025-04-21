import './Slideshow.css';

function Slideshow(slideshow) {
  return (
    <section className="aboutcol1of5">
            <img src={slideshow.image} alt={slideshow.name}/>
            <p>{slideshow.description}</p>
    </section>
  );
}

export default Slideshow;