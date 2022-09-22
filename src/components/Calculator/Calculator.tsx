import React, { useState } from "react";
import {
  Title,
  NumberInput,
  Grid,
  Accordion,
  List,
} from "@mantine/core";

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

        <Title order={2}>Ratios de Rentabilidad</Title>
        <Accordion>
          <Accordion.Item value="roe">
            <Accordion.Control>
              ROE (Return on Equity, Resultado Neto / Patrimonio):{" "}
              {Math.round((netValue / equity) * 100) / 100}
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
              {Math.round((netValue / assets) * 100) / 100}
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

          <Accordion.Item value="roa2">
            <Accordion.Control>
              ROA<sub>2</sub> (Operative Return on Assets, Resultado Operativo /
              Activos): {Math.round((netValue / assets) * 100) / 100}
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

          <Accordion.Item value="costomediodeuda">
            <Accordion.Control>
              Kd (Costo Medio de la Deuda, Intereses / Deuda Onerosa):{" "}
              {Math.round((interests / onerousDebt) * 100) / 100}
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

          <Accordion.Item value="margen">
            <Accordion.Control>
              Dupont ((Resultado Neto / Ventas) * (Ventas / Activos) * (Activos
              / Patrimonio)): {Math.round((netValue / equity) * 100) / 100}
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

          <Accordion.Item value="margen">
            <Accordion.Control>
              ROS (Return on Sales, Resultado Neto / Ventas):{" "}
              {Math.round((netValue / sales) * 100) / 100}
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

          <Accordion.Item value="margenbruto">
            <Accordion.Control>
              Margen Bruto sobre Ventas (Ventas - Costo de Ventas / Ventas):{" "}
              {Math.round((sales - salesCost / sales) * 100) / 100}
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
        </Accordion>

        <Title order={2}>Ratios de Eficiencia Operativa</Title>
        <Accordion>
          <Accordion.Item value="rotacionactivo">
            <Accordion.Control>
              Rotación de Activo (Ventas / Activos):{" "}
              {Math.round((sales / assets) * 100) / 100}
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

          <Accordion.Item value="diasdecobro">
            <Accordion.Control>
              Clientes en Dias o Dias de Cobro (Cuentas por Cobrar * 360 /
              Ventas): {Math.round(((creditSales * 360) / sales) * 100) / 100}
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

          <Accordion.Item value="diasdestock">
            <Accordion.Control>
              Dias de Stock (Inventario * 360 / Costo de Ventas):{" "}
              {Math.round(((inventory * 360) / salesCost) * 100) / 100}
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

          <Accordion.Item value="diasdeproveedores">
            <Accordion.Control>
              Dias de Proveedores (Cuentas a Pagar * 360 / Compras):{" "}
              {Math.round(((creditDebt * 360) / buys) * 100) / 100}
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
        </Accordion>

        <Title order={2}>Ratios Financieros</Title>
        <Accordion>
          <Accordion.Item value="liquidez">
            <Accordion.Control>
              Liquidez (Activo Corriente / Pasivo Corriente):{" "}
              {Math.round((currentAssets / currentDebt) * 100) / 100}
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

          <Accordion.Item value="solvencia">
            <Accordion.Control>
              Solvencia (Patrimonio / Activos o Patrimonio / Pasivos):{" "}
              {Math.round((equity / assets) * 100) / 100}
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

          <Accordion.Item value="endeudamiento">
            <Accordion.Control>
              Endeudamiento (Pasivos / Activos):{" "}
              {Math.round((debt / assets) * 100) / 100}
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

          <Accordion.Item value="apalancamiento">
            <Accordion.Control>
              Apalancamiento (Activos / Patrimonio o Pasivos / Patrimonio):{" "}
              {Math.round((assets / equity) * 100) / 100}
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

          <Accordion.Item value="cobertura">
            <Accordion.Control>
              Cobertura de Intereses (EBITDA / Intereses):{" "}
              {Math.round((ebitda / interests) * 100) / 100}
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

          <Accordion.Item value="coberturatotal">
            <Accordion.Control>
              Cobertura Total (EBITDA / Intereses + Pago de la Deuda CP):{" "}
              {Math.round((ebitda / interests + currentDebt) * 100) / 100}
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
        </Accordion>
    </>
  );
};

export default Calculator;
