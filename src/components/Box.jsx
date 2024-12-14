/* eslint-disable react/prop-types */
export default function Box({ children, bgColor }) {
  return (
    <div
      className={`w-1/2 ${bgColor} p-4 rounded-lg shadow-md flex justify-center`}
    >
      {children}
    </div>
  )
}
