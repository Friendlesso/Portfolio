export function Instructions() {
  const features = [
    "Create multiple elements and style them differently",
    "Change colors, fonts, and layout with CSS",
    "Experiment with borders, shadows, and spacing",
    "Preview your code live as you type",
  ]
  return (
    <div className="flex-col flex-1 max-w-full sm:max-w-[300px] text-white p-2">
      <h1 className="text-xl">Welcome to your little code sandbox!</h1>
      <p className="text-lg">Some things you can try:</p>
      <ul className="pl-3 text-lg">
        {features.map((feat,i) => (
          <li key={i} className="list-decimal">{feat}</li>
        ))}
      </ul>
    </div>
  )
}