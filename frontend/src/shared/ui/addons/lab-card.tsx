import { Card } from "../card";

const LabCard = ({
  title,
  description,
  bgColor,
  date,
}: {
  title: string;
  description?: string;
  bgColor?: string;
  date?: string;
}) => {
  return (
    <Card className="h-72 max-w-[300px] w-full cursor-pointer">
      <div className="flex flex-col gap-5 p-5 h-full">
        <div className="text-2xl font-bold text-sky-900 flex justify-between items-start">
          <span className="bg-slate-600 rounded-full w-5 h-5"></span>
          {title}
        </div>
        <div className="w-full text-end text-2xl font-light">{date}</div>
        <p className="text-wrap text-lg font-semibold opacity-0 hover:opacity-100 hover:translate-y-0 transition-all duration-500  translate-y-5 h-full bg-slate-60000 bg-opacity-25 rounded-lg ">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default LabCard;
