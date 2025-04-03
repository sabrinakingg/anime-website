import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='loader'><Spinner animation="border" role="status" /></div>
  )
}

export default Loader