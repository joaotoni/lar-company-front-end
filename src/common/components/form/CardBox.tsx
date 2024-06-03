import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { Button } from "flowbite-react/components/Button";

interface CardBoxProps {
  title: string;
  buttonText: string;
  navigateTo: string;
}

export default function CardBox(props: CardBoxProps) {
  const navigate = useNavigate();

  return (
    <Card className="max-w-sm items-center flex flex-col gap-2 mb-4">
      <h5 className="text-2xl font-bold text-[22px] tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <Button className="bg-red-900"
        onClick={() => navigate(props.navigateTo)}
        type="button"
      >
        {props.buttonText}
      </Button>
    </Card>
  );
}