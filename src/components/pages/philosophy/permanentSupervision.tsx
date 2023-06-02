import { MainLayout } from '@/components/features/app/Layout';
import PermanentSupervision from '@/pages/philosophy/permanentSupervision';

export const permanentSupervision = () => {
  return (
    <>
      <MainLayout
        main={
          <div className="vstack gap-12 p-8 bg-primary-1">
            <PermanentSupervision />
          </div>
        }
      />
    </>
  );
};
