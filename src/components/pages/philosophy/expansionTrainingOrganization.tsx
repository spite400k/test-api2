import { MainLayout } from '@/components/features/app/Layout';
import { ExpansionTrainingOrganization } from '@/components/features/philosophy/ExpansionTrainingOrganization';

export const expansionTrainingOrganization = () => {
  return (
    <>
      <MainLayout
        main={
          <div className="vstack gap-12 p-8 bg-primary-1">
            <ExpansionTrainingOrganization />
          </div>
        }
      />
    </>
  );
};
