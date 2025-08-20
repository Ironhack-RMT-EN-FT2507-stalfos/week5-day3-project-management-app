import { useNavigate } from "react-router-dom"

function ErrorPage() {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // always points to the previous page
  }

  return (
    <div>
      
      <h3>There was a problem with the page</h3>

      <p>try again in a couple of minutes</p>

      <p>Our developers are all learning!</p>

      <button onClick={handleGoBack}>Go back</button>

    </div>
  )
}
export default ErrorPage