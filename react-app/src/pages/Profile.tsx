
export default function Profile() {

  const user = localStorage.getItem('username')
  if (user) {
    null
  } else {
    alert("Please Login")
    location.href = '/login'
  }
  return (
    <>
      <div>

      </div>
    </>
  )
}
