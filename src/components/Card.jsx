// Componente base reutilizable para tarjetas (OCP - abierto para extensión)
const Card = ({ 
  children, 
  className = "", 
  featured = false,
  ...props 
}) => {
  const baseClass = featured ? "featured" : "";
  const combinedClassName = `card ${baseClass} ${className}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
