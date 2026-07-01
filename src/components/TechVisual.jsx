import hardwareVisual from '../../png/3.jpg';
import platformVisual from '../../png/4.jpg';
import cloudVisual from '../../png/5.jpg';

const visualMap = {
  'software-platform': platformVisual,
  'cloud-service': cloudVisual
};

export default function TechVisual({ id }) {
  const image = visualMap[id] ?? hardwareVisual;

  return (
    <div className="tech-visual">
      <img src={`${image}?v=202607011535`} alt="" />
    </div>
  );
}
