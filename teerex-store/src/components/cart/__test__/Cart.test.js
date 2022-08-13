import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './../Cart';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { CartState } from "../../context/Context";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Cart></Cart>, div);
})