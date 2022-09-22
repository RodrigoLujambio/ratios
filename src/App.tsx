import React, { useState } from "react";
import {
  Tabs,
  Title,
  Container,
  Button,
  Modal,
  TextInput,
} from "@mantine/core";

import Calculator from "./components/Calculator/Calculator";

function App() {
  const [tabLabels, setTabLabels] = useState(Array<string>);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newYearName, setNewYearName] = useState("");

  return (
    <>
      <Modal
        opened={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
          setNewYearName("");
        }}
        title="Agregar Año"
      >
        <>
          <TextInput
            placeholder="Año"
            label="Año"
            withAsterisk
            value={newYearName}
            onChange={(e) => setNewYearName(e.target.value)}
          />
          <Button
            disabled={newYearName.length === 0}
            onClick={() => {
              setModalIsOpen(false);
              tabLabels.push(newYearName);
              setTabLabels(tabLabels);
              setNewYearName("");
            }}
            style={{
              marginTop: '0.5rem'
            }}
          >
            Agregar
          </Button>
        </>
      </Modal>
      <Container size="xl" px="xs">
        <Title order={1}>Calculadora de Ratios</Title>
        <Button
          onClick={() => {
            setModalIsOpen(true);
          }}
          style={{
            marginTop: '0.5rem'
          }}
        >
          Agregar Año
        </Button>
        {tabLabels.length > 0 && (
          <Tabs defaultValue={tabLabels[0]}>
            <Tabs.List>
              {tabLabels.map((label) => {
                return <Tabs.Tab value={label}>{label}</Tabs.Tab>;
              })}
            </Tabs.List>
            {tabLabels.map((label) => {
              return (
                <Tabs.Panel value={label}>
                  <Calculator />
                </Tabs.Panel>
              );
            })}
          </Tabs>
        )}
      </Container>
    </>
  );
}

export default App;
