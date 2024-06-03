
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className={`p-6 bg-[#47867C] rounded-lg shadow-md ${props.className}`}>
      {props.children}
    </div>
  )
}