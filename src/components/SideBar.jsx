import { faHouseChimney, faMoneyBill, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <Col className='min-vh-100  side-bare position-sticky top-0'>
            <div className='ps-1 '>
                <Stack direction='horizontal' className='d-flex align-items-center justify-content-center border-bottom p-1 '>
                    <FontAwesomeIcon icon={faMoneyBill} className='text-white fs-4 me-lg-2' />
                    <div className="p-2 fs-5 text-white title"> Budget</div>
                </Stack>
                <Stack className='mt-5 ' gap={3}>
                    <NavLink to="/" className='d-flex align-items-center text-decoration-none text-white p-1  side-NavLinke'>
                        <FontAwesomeIcon icon={faHouseChimney} className=' fs-5 mx-auto mx-lg-2' />
                        <div className="p-2 fs-5 title"> Home</div>
                    </NavLink>
                    <NavLink to="/expenses" className='d-flex align-items-center text-white text-decoration-none  p-1  side-NavLinke'>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} className=' fs-5 mx-auto mx-lg-2' />
                        <div className="p-2 fs-5 title "> Expenses</div>
                    </NavLink>
                </Stack>
            </div>
        </Col>
    )
}

export default SideBar