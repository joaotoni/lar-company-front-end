interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-green-500 text-white rounded ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  )
}