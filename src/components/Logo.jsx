import logoImage from '../../png/1.png';

export default function Logo() {
  return (
    <div className="logo" aria-label="NovaTech">
      <img src={`${logoImage}?v=202607011200`} alt="NovaTech" />
    </div>
  );
}
