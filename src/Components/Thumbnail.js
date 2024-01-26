export default function Thumbnail({ text, image, openVideo }) {
  const handleclick = () => {
    openVideo(text);
  };
  return (
    <div className="thumbnail" onClick={handleclick}>
      <img id="pacman" src={image} alt="pacman game"></img> <p>{text}</p>
    </div>
  );
}
