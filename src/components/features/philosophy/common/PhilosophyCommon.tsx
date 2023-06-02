import Link from 'next/link';

export const PhilosophyCommon: React.VFC = () => {
  return (
    <>
      <figure className="grid items-stretch gap-4 grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
        <figure className="object-contain relative ">
          <Link href="/philosophy/permanentSupervision">
            <img
              decoding="async"
              width={1110}
              height={491}
              data-id={476}
              src="/img/名称未設定のデザイン-3-edited-1024x453.png"
              alt=""
              className="h-full"
              srcSet="/img/名称未設定のデザイン-3-edited.png 1110w, /img/名称未設定のデザイン-3-edited-300x133.png 300w, /img/名称未設定のデザイン-3-edited-1024x453.png 1024w, /img/名称未設定のデザイン-3-edited-768x340.png 768w"
              sizes="(max-width: 1500px) 100vw, 1500px"
              style={{ opacity: 1 }}
            />
          </Link>
          <figcaption className="absolute bottom-2 left-2 text-white text-center text-xs decoration-white">
            <strong>
              <Link href="/philosophy/permanentSupervision">永久監督</Link>
            </strong>
          </figcaption>
        </figure>

        <figure className="object-contain  relative">
          <Link href="/philosophy/tactical-meeting/">
            <img
              decoding="async"
              width={1500}
              height={900}
              data-id={239}
              src="/img/史上最も戦術的なクラブ-『始動』-2.png"
              alt=""
              className="h-full"
              srcSet="/img/史上最も戦術的なクラブ-『始動』-2.png 1500w, /img/史上最も戦術的なクラブ-『始動』-2-300x180.png 300w, /img/史上最も戦術的なクラブ-『始動』-2-1024x614.png 1024w, /img/史上最も戦術的なクラブ-『始動』-2-768x461.png 768w"
              sizes="(max-width: 1500px) 100vw, 1500px"
              style={{ opacity: 1 }}
            />
          </Link>
          <figcaption className="absolute bottom-2 left-2 text-white text-center text-xs">
            <strong>
              <Link href="/philosophy/tactical-meeting/">戦術へのこだわり</Link>
            </strong>
          </figcaption>
        </figure>

        <figure className="object-contain relative">
          <Link href="/philosophy/socio/">
            <img
              decoding="async"
              width={1500}
              height={900}
              data-id={238}
              src="/img/史上最も戦術的なクラブ-『始動』-1.png"
              alt=""
              className="h-full"
              srcSet="/img/史上最も戦術的なクラブ-『始動』-1.png 1500w, /img/史上最も戦術的なクラブ-『始動』-1-300x180.png 300w, /img/史上最も戦術的なクラブ-『始動』-1-1024x614.png 1024w, /img/史上最も戦術的なクラブ-『始動』-1-768x461.png 768w"
              sizes="(max-width: 1500px) 100vw, 1500px"
              style={{ opacity: 1 }}
            />
          </Link>
          <figcaption className="absolute bottom-2 left-2 text-white text-center text-xs">
            <strong>
              <Link href="/philosophy/socio/">ソシオ制</Link>
            </strong>
          </figcaption>
        </figure>

        <figure className="object-contain relative">
          <Link href="/philosophy/expansionTrainingOrganization/">
            <img
              decoding="async"
              width={1024}
              height={576}
              data-id={25}
              src="/img/donnycocacola-3pxa1O1zoI-unsplash-1024x576.jpg"
              alt=""
              className="h-full"
              srcSet="/img/donnycocacola-3pxa1O1zoI-unsplash-1024x576.jpg 1024w, /img/donnycocacola-3pxa1O1zoI-unsplash-300x169.jpg 300w, /img/donnycocacola-3pxa1O1zoI-unsplash-768x432.jpg 768w, /img/donnycocacola-3pxa1O1zoI-unsplash-1536x864.jpg 1536w, /img/donnycocacola-3pxa1O1zoI-unsplash-2048x1151.jpg 2048w"
              sizes="(max-width: 1024px) 100vw, 1024px"
              style={{ opacity: 1 }}
            />
          </Link>
          <figcaption className="absolute bottom-2 left-2 text-white text-center text-xs">
            <strong>
              <Link href="/philosophy/expansionTrainingOrganization/">
                各地への創設 育成組織
              </Link>
            </strong>
          </figcaption>
        </figure>
        <figcaption className="blocks-gallery-caption">
          <strong>GOAT FCに欠かせない4要素</strong>
        </figcaption>
      </figure>
    </>
  );
};
