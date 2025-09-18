import Step from './Step';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Nos cuentas tu necesidad",
      description: "Ejemplo: cotizaciones, seguimiento, recordatorios"
    },
    {
      number: 2,
      title: "Configuramos la automatizacion",
      description: "En n8n u otra plataforma segun tus necesidades"
    },
    {
      number: 3,
      title: "Tus clientes reciben atencion automatica",
      description: "Sin que tu tengas que hacer nada mas"
    }
  ];

  return (
    <section className="process" id="proceso">
      <div className="container">
        <h2>En 3 pasos simples</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
