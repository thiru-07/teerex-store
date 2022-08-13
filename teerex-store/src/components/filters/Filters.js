import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../../context/Context";
import "./Filters.css";

const Filters = () => {
  /**
   * Filter Component that holds all the UI elements of the Filter bar.
  */

  const {
    productDispatch,
    productState: { byColor, byGender, byPrice, byType },
    state,
  } = CartState(); // Destructuring the required store variables from Context

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <Form>
        <Form.Group >
          <Form.Label> Color</Form.Label>
          <br />
          <Form.Check
            inline
            label="Red"
            name="group1"
            type="checkbox"
            checked={byColor === "Red"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_COLOR",
                payload: "Red",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="Blue"
            name="group1"
            type="checkbox"
            checked={byColor === "Blue"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_COLOR",
                payload: "Blue",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="Green"
            name="group1"
            type="checkbox"
            checked={byColor === "Green"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_COLOR",
                payload: "Green",
              })
            }
          />
        </Form.Group>

        <Form.Group >
          <Form.Label> Gender</Form.Label>
          <br />
          <Form.Check
            inline
            label="Men"
            name="group2"
            type="checkbox"
            checked={byGender === "Men"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_GENDER",
                payload: "Men",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="Women"
            name="group2"
            type="checkbox"
            checked={byGender === "Women"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_GENDER",
                payload: "Women",
              })
            }
          />
        </Form.Group>

        <Form.Group >
          <Form.Label> Price</Form.Label>
          <br />
          <Form.Check
            inline
            label="0-₹250"
            name="group3"
            type="checkbox"
            checked={byPrice === "0-₹250"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_PRICE",
                payload: "0-₹250",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="₹251-₹450"
            name="group3"
            type="checkbox"
            checked={byPrice === "₹251-₹450"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_PRICE",
                payload: "₹251-₹450",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="Above ₹450"
            name="group1"
            type="checkbox"
            checked={byPrice === "Above ₹450"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_PRICE",
                payload: "Above ₹450",
              })
            }
          />
        </Form.Group>

        <Form.Group >
          <Form.Label> Type</Form.Label>
          <br />
          <Form.Check
            inline
            label="Polo"
            name="group4"
            type="checkbox"
            checked={byType === "Polo"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "Polo",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="Hoodie"
            name="group4"
            type="checkbox"
            checked={byType === "Hoodie"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "Hoodie",
              })
            }
          />
          <br />
          <Form.Check
            inline
            label="Basic"
            name="group4"
            type="checkbox"
            checked={byType === "Basic"}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "Basic",
              })
            }
          />
        </Form.Group>

      </Form>

      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
