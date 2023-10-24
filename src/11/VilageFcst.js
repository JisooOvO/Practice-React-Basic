import { useParams } from "react-router-dom"

const VilageFcst = () => {
  const dt = useParams().dt;
  return (
    <div>{dt}</div>
  )
}

export default VilageFcst