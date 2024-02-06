interface ContentProps {
  title: string;
  description: string;
}

function Content({ title, description }: ContentProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold p-3">
        {title}
      </h1>
      <p className="text-lg p-3">
        {description}
      </p>
    </div>
  )
}

export default Content