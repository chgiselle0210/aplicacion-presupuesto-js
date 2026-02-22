let egresos = [900, 400];
let ingresos = [9000, 400];

const totalIngresos = () => {
  let totalIngreso = 0;

  for (const ingreso of ingresos) {
    totalIngreso += ingreso;
  }

  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;

  for (const egreso of egresos) {
    totalEgreso += egreso;
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