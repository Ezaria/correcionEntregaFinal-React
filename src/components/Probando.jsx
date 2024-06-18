import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Probando() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Col className="mb-3">

        <Form.Group  className='mb-3' controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onInput={(e) => {setNombre(e.target.value)}}
            required
            type="text"
            placeholder="Ingrese su nombre..."
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group  className='mb-3'controlId="validationCustom02">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
          onInput={(e) => {setTelephone(e.target.value)}}
            required
            type="number"
            placeholder="Ingrese su numero..."
            defaultValue="1234567890"
          />
          <Form.Control.Feedback type='invalid'>Tiene que ser un numero +12344567</Form.Control.Feedback>
        </Form.Group>

        <Form.Group  className='mb-3' controlId="validationCustomUsername">
          <Form.Label>Correo</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              onInput={(e) => {setNombre(e.target.value)}}
              type="email"
              placeholder="Ingrese su correo..."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Escrive un correo (ejemplo@gmail.com)
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Col>
      
      
      <Button type="submit" onClick={generarOrden} className='btn btn-dark'>Generar Orden</Button>
    </Form>
  );
}

export default Probando;