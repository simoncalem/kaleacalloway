export default function GridContainer({ children }) {
  return (
    <div className="container mx-auto px-5 grid grid-cols-12">{children}</div>
  )
}
