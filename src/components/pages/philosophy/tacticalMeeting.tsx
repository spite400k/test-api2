import { MainLayout } from '@/components/features/app/Layout';
import { TacticalMeeting } from '@/components/features/philosophy/TacticalMeeting';

export const tacticalMeeting = () => {
  return (
    <>
      <MainLayout
        main={
          <div className="vstack gap-12 p-8 bg-primary-1">
            <TacticalMeeting />
          </div>
        }
      />
    </>
  );
};
