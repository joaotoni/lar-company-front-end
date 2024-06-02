
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 ${props.className}`}>
      {props.children}
    </div>
  )
}