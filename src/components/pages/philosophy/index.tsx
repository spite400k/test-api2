import { MainLayout } from '@/components/features/app/Layout';
import { Philosophy } from '@/components/features/philosophy';

export const Philosophies = () => {
  return (
    <>
      <MainLayout
        main={
          <div className="vstack gap-12 p-8 bg-primary-1">
            <Philosophy />
          </div>
        }
      />
    </>
  );
};
