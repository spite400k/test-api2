import { MainLayout } from '@/components/features/app/Layout';
import { Socio } from '@/components/features/philosophy/Socio';

export const socio = () => {
  return (
    <>
      <MainLayout
        main={
          <div className="vstack gap-12 p-8 bg-primary-1">
            <Socio />
          </div>
        }
      />
    </>
  );
};
