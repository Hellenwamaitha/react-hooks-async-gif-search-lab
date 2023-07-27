import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GifSearch({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <Container>
            <Row className="justify-content-end">
                <Col xs="auto">
                    <p>Enter a Search Term</p>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col xs="auto">
                    <Form inline onSubmit={handleSubmit}>
                        <Form.Group controlId="formSearchQuery" className="mb-2">
                            <Form.Control 
                                type="text" 
                                value={query}
                                onChange={handleChange}
                                placeholder="Search for a GIF..."
                            />
                        </Form.Group>
                        <Button 
                            type="submit" 
                            variant="success" 
                            className="ml-2 mb-2"
                        >
                            Find Gifs
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default GifSearch;



