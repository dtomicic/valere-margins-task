import Form from 'react-bootstrap/Form';

interface IYearFilterProps {
  onYearSelect: (year: number) => void;
}

const YearFilter = (props: IYearFilterProps) => {
  const { onYearSelect } = props;
  return (
    <Form.Select onChange={(e) => onYearSelect(parseInt(e.target.value))}>
        <option value={0}>Select year of release</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
    </Form.Select>
  )
}

export default YearFilter