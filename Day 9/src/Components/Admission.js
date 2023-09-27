
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApplication, editApplication, removeApplication } from '../Redux/applicationSlice';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import '../Assets/css/Admission.css'
function Admission() {
  
  const applications = useSelector((state) => state.applications);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [editIndex, setEditIndex] = useState(-1);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({});
    setEditIndex(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (editIndex === -1) {
      dispatch(addApplication(formData));
    } else {
      dispatch(editApplication({ index: editIndex, updatedApplication: formData }));
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setFormData(applications[index]);
    setEditIndex(index);
    handleShow();
  };

  const handleRemove = (index) => {
    dispatch(removeApplication(index));
  };

  return (
    <div className="container">
      <h1>Blood Donation Details</h1>
      <Button variant="primary" onClick={handleShow}>
        Add Application
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Haemoglobin Level</th>
            <th>Pulse</th>
            <th>Blood Pressure</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.name}</td>
              <td>{app.fathersName}</td>
              <td>{app.mothersName}</td>
              <td>{app.marks10}</td>
              <td>{app.marks12}</td>
              <td>{app.ugCgpa}</td>
              <td>{app.pgCollegeName}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleRemove(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex === -1 ? 'Add Application' : 'Edit Application'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="fathersName">
              <Form.Label>Blood Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Blood Type"
                name="fathersName"
                value={formData.fathersName || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="mothersName">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Age"
                name="mothersName"
                value={formData.mothersName || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="marks10">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Weight"
                name="marks10"
                value={formData.marks10 || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="marks12">
              <Form.Label>Haemoglobin Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Haemoglobin level"
                name="marks12"
                value={formData.marks12 || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="ugCgpa">
              <Form.Label>Pulse</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pulse"
                name="ugCgpa"
                value={formData.ugCgpa || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="pgCollegeName">
              <Form.Label>Blood Pressure</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Blood Pressure"
                name="pgCollegeName"
                value={formData.pgCollegeName || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editIndex === -1 ? 'Add' : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admission;
