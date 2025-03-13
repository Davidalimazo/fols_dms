import { Speech, Users, FileText } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

export default function DmsLandingPage() {
  const navigate = useNavigate();

  return (
    <div className='text-black flex xs:flex-col sm:flex-col md:flex-row items-center justify-center mx-auto my-10 space-x-4'>
      <ActionCard
        action={() => {
          navigate('/members');
        }}
        title={'Manage Members'}
        icon={<Users className='text-3xl w-[50px] h-[50px] text-gray-600' />}
      />
      <ActionCard
        action={() => {
          navigate('/followup');
        }}
        title={'Manage Follow Up'}
        icon={<Speech className='text-3xl w-[50px] h-[50px] text-gray-600' />}
      />
      <ActionCard
        action={() => {
          navigate('/generate-report');
        }}
        title={'Generate Report'}
        icon={<FileText className='text-3xl w-[50px] h-[50px] text-gray-600' />}
      />
    </div>
  );
}
const ActionCard = ({
  title,
  action,
  icon,
}: {
  action: () => void;
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className='cursor-pointer hover:bg-green-200 hover:text-white w-[250px] h-[150px] rounded-md p-5 bg-white shadow-sm text-center flex flex-col items-center justify-around'
      onClick={action}>
      {icon}
      <div className='text-xl font-bold text-gray-500'>{title}</div>
    </div>
  );
};
