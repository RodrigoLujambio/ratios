import React, { useState } from "react";
import { Title, NumberInput, Grid, Accordion, List } from "@mantine/core";

const Calculator = () => {
  const [netValue, setNetValue] = useState(0);
  const [equity, setEquity] = useState(0);
  const [currentAssets, setCurrentAssets] = useState(0);
  const [assets, setAssets] = useState(0);
  const [sales, setSales] = useState(0);
  const [salesCost, setSalesCost] = useState(0);
  const [creditSales, setCreditSales] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [creditDebt, setCreditDebt] = useState(0);
  const [currentDebt, setCurrentDebt] = useState(0);
  const [onerousDebt, setOnerousDebt] = useState(0);
  const [debt, setDebt] = useState(0);
  const [buys, setBuys] = useState(0);
  const [ebitda, setEbitda] = useState(0);
  const [interests, setInteresets] = useState(0);

  return (
    <>
      <Title order={2}>Inputs</Title>
      <Grid>
        <Grid.Col sm={4}>
          <NumberInput
            label="Ventas"
            value={sales}
            onChange={(value) => setSales(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={4}>
          <NumberInput
            label="Costo de Ventas"
            value={salesCost}
            onChange={(value) => setSalesCost(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={4}>
          <NumberInput
            label="Margen Operativo (EBITDA)"
            value={ebitda}
            onChange={(value) => setEbitda(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col sm={4}>
          <NumberInput
            label="Intereses"
            value={interests}
            onChange={(value) => setInteresets(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={4}>
          <NumberInput
            label="Resultado Neto"
            value={netValue}
            onChange={(value) => setNetValue(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={4}>
          <NumberInput
            label="Compras"
            value={buys}
            onChange={(value) => setBuys(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col sm={3}>
          <NumberInput
            label="Cuentas por Cobrar"
            value={creditSales}
            onChange={(value) => setCreditSales(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={3}>
          <NumberInput
            label="Inventario"
            value={inventory}
            onChange={(value) => setInventory(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={3}>
          <NumberInput
            label="Activo Corriente"
            value={currentAssets}
            onChange={(value) => setCurrentAssets(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={3}>
          <NumberInput
            label="Activos"
            value={assets}
            onChange={(value) => setAssets(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col sm={3}>
          <NumberInput
            label="Cuentas a Pagar"
            value={creditDebt}
            onChange={(value) => setCreditDebt(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={3}>
          <NumberInput
            label="Deuda Onerosa"
            value={onerousDebt}
            onChange={(value) => setOnerousDebt(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={3}>
          <NumberInput
            label="Pasivo Corriente"
            value={currentDebt}
            onChange={(value) => setCurrentDebt(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
        <Grid.Col sm={3}>
          <NumberInput
            label="Pasivos"
            value={debt}
            onChange={(value) => setDebt(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col sm={4}>
          <NumberInput
            label="Patrimonio"
            value={equity}
            onChange={(value) => setEquity(value!)}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value!))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
          />
        </Grid.Col>
      </Grid>

      <Title order={2} style={{ marginTop: "1rem" }}>
        Ratios de Rentabilidad
      </Title>
      <Accordion>
        <Accordion.Item value="roe">
          <Accordion.Control>
            ROE (Return on Equity, Resultado Neto / Patrimonio):{" "}
            {!Number.isNaN(Math.round((netValue / equity) * 100) / 100) &&
            Math.round((netValue / equity) * 100) / 100 < Infinity
              ? Math.round((netValue / equity) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Mide la rentabilidad obtenida sobre el patrimonio neto
              </List.Item>
              <List.Item>
                Las ganancias obtenidas por cada dólar (o unidad
                monetaria)invertido en el capital social de una empresa.
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="roa">
          <Accordion.Control>
            ROA (Return on Assets, Resultado Neto / Activos):{" "}
            {!Number.isNaN(Math.round((netValue / assets) * 100) / 100) &&
            Math.round((netValue / assets) * 100) / 100 < Infinity
              ? Math.round((netValue / assets) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Mide la rentabilidad obtenida sobre los activos totales
              </List.Item>
              <List.Item>
                Indica la efectividad con la que se utilizan los activos para
                generar beneficios
              </List.Item>
              <List.Item>
                Indica la efectividad con la que se utilizan los activos para
                generar beneficios
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="roa2">
          <Accordion.Control>
            ROA<sub>2</sub> (Operative Return on Assets, Resultado Operativo /
            Activos):{" "}
            {!Number.isNaN(Math.round((netValue / assets) * 100) / 100) &&
            Math.round((netValue / assets) * 100) / 100 < Infinity
              ? Math.round((netValue / assets) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Mide la capacidad de los activos de la empresa para generar
                ganancias con independencia del apalancamiento
              </List.Item>
              <List.Item>
                Las ganancias obtenidas por cada dólar (o unidad
                monetaria)invertido en el capital social de una empresa.
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="costomediodeuda">
          <Accordion.Control>
            Kd (Costo Medio de la Deuda, Intereses / Deuda Onerosa):{" "}
            {!Number.isNaN(Math.round((interests / onerousDebt) * 100) / 100) &&
            Math.round((interests / onerousDebt) * 100) / 100 < Infinity
              ? Math.round((interests / onerousDebt) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>Pendiente</List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="dupont">
          <Accordion.Control>
            Dupont ((Resultado Neto / Ventas) * (Ventas / Activos) * (Activos /
            Patrimonio)):{" "}
            {!Number.isNaN(Math.round((netValue / equity) * 100) / 100) &&
            Math.round((netValue / equity) * 100) / 100 < Infinity
              ? Math.round((netValue / equity) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Nos permiten explicar el modelo a través del cual la empresa
                genera valor para quienes aportaron el capital
              </List.Item>
              <List.Item>
                Abre el ROE mostrándonos el margen sobre ventas, la eficiencia
                en el uso de los activos para generar ventas, esto es, la
                rotación de los activos y el grado de apalancamiento del negocio
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="margen">
          <Accordion.Control>
            ROS (Return on Sales, Resultado Neto / Ventas):{" "}
            {!Number.isNaN(Math.round((netValue / sales) * 100) / 100) &&
            Math.round((netValue / sales) * 100) / 100 < Infinity
              ? Math.round((netValue / sales) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Es el porcentaje de retorno sobre las ventas: utilidad neta como
                porcentaje de los ingresos
              </List.Item>
              <List.Item>
                Muestra la capacidad de una empresa para controlar todos sus
                costos en relación con su nivel de ventas
              </List.Item>
              <List.Item>
                Puede estar relacionado con un margen de seguridad: un margen de
                ganancia bajo significa un mayor riesgo de que una disminución
                en las ventas borre las ganancias
              </List.Item>
              <List.Item>
                Varía ampliamente a través de modelos de negocios, industrias y
                mezclas de productos
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="margenbruto">
          <Accordion.Control>
            Margen Bruto sobre Ventas (Ventas - Costo de Ventas / Ventas):{" "}
            {!Number.isNaN(
              Math.round((sales - salesCost / sales) * 100) / 100
            ) && Math.round((sales - salesCost / sales) * 100) / 100 < Infinity
              ? Math.round((sales - salesCost / sales) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Es una medida de la ganancia bruta obtenida en las ventas
              </List.Item>
              <List.Item>
                Es el porcentaje de dinero que queda de los ingresos operativos
                después de contabilizar el costo de bienes vendidos o servicios
                prestados
              </List.Item>
              <List.Item>
                Considera el costo de los bienes vendidos, pero no incluye otros
                costos tales como gastos generales, impuestos, intereses y
                depreciación
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Title order={2} style={{ marginTop: "1rem" }}>
        Ratios de Eficiencia Operativa
      </Title>
      <Accordion>
        <Accordion.Item value="rotacionactivo">
          <Accordion.Control>
            Rotación de Activo (Ventas / Activos):{" "}
            {!Number.isNaN(Math.round((sales / assets) * 100) / 100) &&
            Math.round((sales / assets) * 100) / 100 < Infinity
              ? Math.round((sales / assets) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Indica la eficiencia con la que una empresa utiliza sus activos
              </List.Item>
              <List.Item>
                Una mayor rotación (turnover) sugiere un uso más eficiente de
                los activos u operaciones más eficientes
              </List.Item>
              <List.Item>
                Varía ampliamente en diferentes industrias y modelos de negocio
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="diasdecobro">
          <Accordion.Control>
            Clientes en Dias o Dias de Cobro (Cuentas por Cobrar * 360 /
            Ventas):{" "}
            {!Number.isNaN(
              Math.round(((creditSales * 360) / sales) * 100) / 100
            ) &&
            Math.round(((creditSales * 360) / sales) * 100) / 100 < Infinity
              ? Math.round(((creditSales * 360) / sales) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Nos da el número de días que la empresa tarda, en promedio, en
                cobrar de sus clientes.
              </List.Item>
              <List.Item>
                Un incremento en los días de cobro puede deberse a que el
                departamento de cobros no esté haciendo bien su trabajo, a que
                la solvencia de los clientes se haya deteriorado, etc.
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="diasdestock">
          <Accordion.Control>
            Dias de Stock (Inventario * 360 / Costo de Ventas):{" "}
            {!Number.isNaN(
              Math.round(((inventory * 360) / salesCost) * 100) / 100
            ) &&
            Math.round(((inventory * 360) / salesCost) * 100) / 100 < Infinity
              ? Math.round(((inventory * 360) / salesCost) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Nos dice el número de días de venta que la empresa mantiene,
                como promedio, en el inventario.
              </List.Item>
              <List.Item>
                El ratio inverso se llama rotación de inventario
              </List.Item>
              <List.Item>
                Si este ratio aumenta, puede deberse a una mala gestión del
                departamento de compras, a que se espere vender más en el
                período, etc.
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="diasdeproveedores">
          <Accordion.Control>
            Dias de Proveedores (Cuentas a Pagar * 360 / Compras):{" "}
            {!Number.isNaN(
              Math.round(((creditDebt * 360) / buys) * 100) / 100
            ) && Math.round(((creditDebt * 360) / buys) * 100) / 100 < Infinity
              ? Math.round(((creditDebt * 360) / buys) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Nos da el número de días que la empresa tarda, en promedio, en
                pagar a sus proveedores
              </List.Item>
              <List.Item>
                Un aumento del ratio indica una demora en los pagos, que puede
                deberse a un deterioro de la situación financiera, entre otros
                motivos
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Title order={2} style={{ marginTop: "1rem" }}>
        Ratios Financieros
      </Title>
      <Accordion>
        <Accordion.Item value="liquidez">
          <Accordion.Control>
            Liquidez (Activo Corriente / Pasivo Corriente):{" "}
            {!Number.isNaN(
              Math.round((currentAssets / currentDebt) * 100) / 100
            ) &&
            Math.round((currentAssets / currentDebt) * 100) / 100 < Infinity
              ? Math.round((currentAssets / currentDebt) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                También conocido como razón corriente o ratio de capital de
                trabajo (activo corriente – pasivo corriente)
              </List.Item>
              <List.Item>
                Una proporción demasiado baja podría indicar que una empresa
                podría tener dificultades para cumplir con sus obligaciones a
                corto plazo
              </List.Item>
              <List.Item>
                Un índice demasiado alto podría indicar una tenencia excesiva de
                efectivo, inventarios o crédito de clientes (cuentas por
                cobrar).
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="solvencia">
          <Accordion.Control>
            Solvencia (Patrimonio / Activos o Patrimonio / Pasivos):{" "}
            {!Number.isNaN(Math.round((equity / assets) * 100) / 100) &&
            Math.round((equity / assets) * 100) / 100 < Infinity
              ? Math.round((equity / assets) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Mide la relación existente entre los recursos propios
                (patrimonio) y los activos totales
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="endeudamiento">
          <Accordion.Control>
            Endeudamiento (Pasivos / Activos):{" "}
            {!Number.isNaN(Math.round((debt / assets) * 100) / 100) &&
            Math.round((debt / assets) * 100) / 100 < Infinity
              ? Math.round((debt / assets) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Es la contracara de la solvencia, nos muestra la relación entre
                los recursos ajenos y los activos que están financiando
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="apalancamiento">
          <Accordion.Control>
            Apalancamiento (Activos / Patrimonio o Pasivos / Patrimonio):{" "}
            {!Number.isNaN(Math.round((assets / equity) * 100) / 100) &&
            Math.round((assets / equity) * 100) / 100 < Infinity
              ? Math.round((assets / equity) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Se trata de otra forma de relacionar las variables que componen
                la ecuación contable fundamental
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="cobertura">
          <Accordion.Control>
            Cobertura de Intereses (EBITDA / Intereses):{" "}
            {!Number.isNaN(Math.round((ebitda / interests) * 100) / 100) &&
            Math.round((ebitda / interests) * 100) / 100 < Infinity
              ? Math.round((ebitda / interests) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Para evaluar la capacidad de endeudamiento de una empresa, este
                ratio sirve para analizar su capacidad para pagar los intereses
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="coberturatotal">
          <Accordion.Control>
            Cobertura Total (EBITDA / Intereses + Pago de la Deuda CP):{" "}
            {!Number.isNaN(
              Math.round((ebitda / interests + currentDebt) * 100) / 100
            ) &&
            Math.round((ebitda / interests + currentDebt) * 100) / 100 <
              Infinity
              ? Math.round((ebitda / interests + currentDebt) * 100) / 100
              : ""}
          </Accordion.Control>
          <Accordion.Panel>
            <List>
              <List.Item>
                Igual que el ratio anterior, sólo que si queremos medir la
                capacidad de efectiva de pago, deberíamos agregar la
                amortización del capital en el denominador
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Calculator;
