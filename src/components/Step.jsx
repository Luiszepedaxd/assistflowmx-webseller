// Componente reutilizable para pasos (OCP - abierto para extensión)
const Step = ({ 
  number, 
  title, 
  description, 
  className = "",
  ...props 
}) => {
  return (
    <div className={`step ${className}`.trim()} {...props}>
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
