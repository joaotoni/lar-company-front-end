interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-red text-white rounded ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}