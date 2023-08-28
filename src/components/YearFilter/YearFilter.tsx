import Form from 'react-bootstrap/Form';

const YearFilter = () => {
  return (
    <Form.Select>
        <option>Select year of release</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
    </Form.Select>
  )
}

export default YearFilter