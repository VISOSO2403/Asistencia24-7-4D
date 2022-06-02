export function Alert({message}) {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {message}
    </div>
  )
}
