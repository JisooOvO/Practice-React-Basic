import { useLocation } from "react-router-dom"
import qs from 'query-string'

const RoutePage2 = () => {
  const loc = useLocation().search; // ?item=2
  const item = qs.parse(loc).item;
  return (
    <div>RoutePage2 : {item}</div>
  )
}

export default RoutePage2