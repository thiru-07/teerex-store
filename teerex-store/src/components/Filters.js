import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CartState } from '../context/Context';

const Filters = () => {

    const {
        productState: { searchQuery, byColor },
        productDispatch
    } = CartState()

    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Color"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() => {
                        productDispatch({
                            type: "FILTER_BY_COLOR"
                        })
                    }}
                    checked={byColor ? false : true}
                />
            </span>
            <Button
                variant="light"
                onClick={() => {
                    productDispatch({
                        type: "CLEAR_FILTERS"
                    })
                }}
            >
                Clear Filters
            </Button>
        </div>

    )
}

export default Filters