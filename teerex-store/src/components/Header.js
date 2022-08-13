import React from 'react'
import { Navbar, Container, FormControl, Nav, Badge, Dropdown, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {

    const {
        state: { cart },
        dispatch,
        productDispatch } = CartState()


    return (
        <Navbar bg='dark' variant='dark' style={{ height: 50 }}>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder='Search a product'
                        className="m-auto"
                        onChange={e => {
                            productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                            })
                        }}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color='white' fontSize='25px' />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => {
                                        return <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.imageURL}
                                                className="cartItemImg"
                                                alt={prod.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>₹ {prod.price}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }}
                                            />
                                        </span>
                                    })
                                    }
                                    <Link to="/cart">
                                        <Button style={{ with: "95%", margin: "0 10px" }}>
                                            Go to Cart
                                        </Button>
                                    </Link>
                                </>
                            ) :
                                (<span style={{ padding: 10 }}>Cart is empty!</span>)
                            }

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header