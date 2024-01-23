import whatsappimg from "./../Media/whatsapp.png";

export default function Whatsapp() {
  return (
    <>
      <div className="whatsapp-img">
        <a
          href="https://wa.me/+923217285518"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappimg} alt="Contact" />
        </a>
      </div>
    </>
  );
}
