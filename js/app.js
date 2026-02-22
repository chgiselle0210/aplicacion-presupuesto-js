// Nota: para este Avance 3 utilicé exactamente los valores de ejemplo
// indicados en el texto del documento "Avance de proyecto 3"
// (Salario 20000, Venta auto 50000, Renta 4000 y Ropa 800).
// La imagen de referencia incluida en ese documento presenta montos distintos,
// por lo que los resultados en consola pueden no coincidir visualmente
// con esa captura, aunque sí corresponden a los valores solicitados en el texto.

let ingresos = [new Ingreso("Salario", 20000), new Ingreso("Venta auto", 50000)];
let egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];

const totalIngresos = () => {
  let totalIngreso = 0;

  for (const ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }

  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;

  for (const egreso of egresos) {
    totalEgreso += egreso.valor;
  }

  return totalEgreso;
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarCabecero = () => {
  const presupuesto = totalIngresos() - totalEgresos();
  const porcentajeEgreso = totalEgresos() / totalIngresos();

  console.log(formatoMoneda(presupuesto));
  console.log(formatoPorcentaje(porcentajeEgreso));
  console.log(formatoMoneda(totalIngresos()));
  console.log(formatoMoneda(totalEgresos()));
};

cargarCabecero();