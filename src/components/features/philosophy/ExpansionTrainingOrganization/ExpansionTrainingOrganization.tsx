import { BreadCrumbs } from '../common/breadcrumbs';
import { PhilosophyCommon } from '../common/PhilosophyCommon';

export const ExpansionTrainingOrganization: React.VFC = () => {
  return (
    <div className="p-8 bg-primary-1">
      <section>
        <div id="content" className="clearfix">
          <div id="contentInner">
            <main>
              <article>
                <div
                  id="st-page"
                  className="page type-page status-publish has-post-thumbnail hentry"
                >
                  {/*ぱんくず */}
                  <div
                    id="breadcrumb"
                    className="mb-5"
                  >
                    <BreadCrumbs
                      lists={[
                        {
                          string: 'HOME',
                          path: '/',
                        },
                        {
                          string: 'GOAT FCの哲学',
                          path: '/philosophy',
                        },
                        {
                          string: '各地への創設＆育成組織',
                          path: '',
                        },
                      ]}
                    />

                    {/* <ol
                      itemScope=""
                      itemType="http://schema.org/BreadcrumbList"
                    >
                      <li
                        itemProp="itemListElement"
                        itemScope=""
                        itemType="http://schema.org/ListItem"
                      >
                        <a href="https://goat-fc.com" itemProp="item">
                          <span itemProp="name">HOME</span>
                        </a>
                        &gt;
                        <meta itemProp="position" content={1} />
                      </li>
                      <li
                        itemProp="itemListElement"
                        itemScope=""
                        itemType="http://schema.org/ListItem"
                      >
                        <a
                          href="https://goat-fc.com/philosophy/"
                          title="各地への創設＆育成組織"
                          itemProp="item"
                        >
                          <span itemProp="name">GOAT FCの哲学</span>
                        </a>
                        &gt;
                        <meta itemProp="position" content={2} />
                      </li>
                    </ol> */}
                    {/* <h1 className="entry-title st-css-no">
                      各地への創設＆育成組織
                    </h1> */}
                  </div>
                  {/*/ ぱんくず */}
                  {/*ループ開始 */}
                  <div className="mainbox">
                    <div id="nocopy">
                      {/* コピー禁止エリアここから */}
                      <div className="entry-content">
                        <h2 className="is-style-default has-very-dark-gray-color has-text-color">
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            各地への創設＆育成組織
                          </mark>
                        </h2>
                        <p>
                          GOAT FCは世界の頂点を目指しています。
                          <br />
                          その為には、ひとつのクラブと言う枠組みを超える必要があります。
                        </p>
                        <p>
                          最初の都市である東京が充実し、ノウハウを蓄積させた先には
                          <br />
                          日本の各地にGOAT FCを創設するビジョンを持っています。
                        </p>
                        <figure className="wp-block-image size-large is-resized">
                          <img
                            decoding="async"
                            src="https://goat-fc.com/wp-content/uploads/2022/08/japan-map-1024x425.jpg"
                            alt=""
                            className="wp-image-582"
                            width={643}
                            height={263}
                            style={{ opacity: 1 }}
                          />
                        </figure>
                        <p>
                          さらにクラブは育成年代の指導にも着手します。
                          <br />
                          小学生低学年から『考えてプレーするサッカー』の普及を目指す事で
                          <br />
                          日本サッカーの戦術理解の向上に努めたいと考えております。
                          <br />
                          『戦術サッカー』は子供の成長過程における思考力や判断力だけでなく
                          <br />
                          想像力や協調性など、多方面において有効だと考えています。
                          <br />
                          <br />
                          そして最終的には、ヨーロッパやアフリカなど、世界に広げていく構想であります。
                        </p>
                        <figure className="wp-block-image size-large is-resized">
                          <img
                            decoding="async"
                            src="https://goat-fc.com/wp-content/uploads/2022/08/world-map-1024x425.jpg"
                            alt=""
                            className="wp-image-584"
                            width={805}
                            height={333}
                            srcSet="https://goat-fc.com/wp-content/uploads/2022/08/world-map-1024x425.jpg 1024w, https://goat-fc.com/wp-content/uploads/2022/08/world-map-300x125.jpg 300w, https://goat-fc.com/wp-content/uploads/2022/08/world-map-768x319.jpg 768w, https://goat-fc.com/wp-content/uploads/2022/08/world-map.jpg 1132w"
                            sizes="(max-width: 805px) 100vw, 805px"
                            style={{ opacity: 0 }}
                          />
                        </figure>
                        <p>
                          既に、GOAT football tacticsは越境し、
                          <br />
                          スペインの都市バルセロナにおいても留学のルートも作っております。
                          <br />
                          留学斡旋業を経験した現地在住日本人スタッフにより、
                          <br />
                          食事や住いまでの完全フルサポートを低価格で実施。
                          <br />
                          スペイン語学校に通いながら、現地のカタルーニャ戦術学校に通い
                          <br />
                          現地で100年以上続く伝統的なクラブ『CFバダロナ』の戦術分析官担であり
                          <br />
                          ユースチーム監督のスタッフのもと、アシスタントコーチとして練習を指導。
                          <br />
                        </p>
                        <figure className="wp-block-image size-large">
                          <img
                            decoding="async"
                            width={1024}
                            height={425}
                            src="https://goat-fc.com/wp-content/uploads/2022/08/hiyori-2-1024x425.jpg"
                            alt=""
                            className="wp-image-615"
                            srcSet="https://goat-fc.com/wp-content/uploads/2022/08/hiyori-2-1024x425.jpg 1024w, https://goat-fc.com/wp-content/uploads/2022/08/hiyori-2-300x125.jpg 300w, https://goat-fc.com/wp-content/uploads/2022/08/hiyori-2-768x319.jpg 768w, https://goat-fc.com/wp-content/uploads/2022/08/hiyori-2.jpg 1132w"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            style={{ opacity: 0 }}
                          />
                        </figure>
                        <p>
                          <br />
                          世界中にGOAT FCが創設された時、
                          <br />
                          全てのクラブは同じ戦術理論で戦います。
                          <br />
                          つまり、各クラブの有力選手が集結した時にも、
                          <br />
                          統一された戦術理論で即座に戦う事が出来るという事です。
                          <br />
                          <br />
                          最終的に目指すのは、
                          <br />
                          世界中のGOAT FCの有力選手を一点に集結させ、
                          <br />
                          <strong>
                            GOAT FC世界選抜を作り、世界の頂点を目指す
                          </strong>
                          事です。
                          <br />
                          <br />
                        </p>
                        <PhilosophyCommon />
                      </div>
                    </div>
                    {/* コピー禁止エリアここまで */}
                  </div>
                  <div className="blogbox st-hide">
                    <p>
                      <span className="kdate">
                        <i className="st-fa st-svg-refresh" />
                        <time
                          className="updated"
                          dateTime="2022-08-15T20:20:42+0900"
                        >
                          2022年8月15日
                        </time>
                      </span>
                    </p>
                  </div>
                  <p className="author" style={{ display: 'none' }}>
                    <a
                      href="https://goat-fc.com/author/goat/"
                      title="GOAT"
                      className="vcard author"
                    >
                      <span className="fn">author</span>
                    </a>
                  </p>
                  {/*ループ終了 */}
                </div>
                {/*/post*/}
              </article>
            </main>
          </div>
          {/* /#contentInner */}
        </div>
      </section>
    </div>
  );
};
