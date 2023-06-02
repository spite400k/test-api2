import { BreadCrumbs } from '../common/breadcrumbs';
import { PhilosophyCommon } from '../common/PhilosophyCommon';

export const Socio: React.VFC = () => {
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
                  <div id="breadcrumb" className="mb-5">
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
                          string: 'ソシオ',
                          path: '',
                        },
                      ]}
                    />
                  </div>
                  {/*/ ぱんくず */}
                  {/*ループ開始 */}
                  <div className="mainbox">
                    <div id="nocopy">
                      {/* コピー禁止エリアここから */}
                      <div className="entry-content">
                        <h2>
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            ソシオ
                          </mark>
                        </h2>
                        <p>
                          ほぼ全てのクラブが企業スポンサーと提携し、資金を集める代わりに企業がそのクラブの実質的な権限を持っています。
                          <br />
                          企業が実質的な権限を持つと、クラブはその企業の広告塔となり営利団体となります。
                          <br />
                          そうなれば結果が伴わない時、監督は解任され、選手の価値は広告価値となります。
                        </p>
                        <p>
                          つまり、クラブは企業ビジネスであり
                          <br />
                          真の意味でファンやサポーターにとって有益な組織ではなくなります。
                        </p>
                        <p>
                          戦術を追い求めるGOAT
                          FCでは、会員から会費を募り経営するソシオ制を導入しています。
                          <br />
                          そうする事で、企業の体質に左右されない経営が可能になります。
                          <br />
                          <br />
                          そうする事で、永久監督が可能となり、哲学を貫き続ける事が出来ます。
                          <br />
                          クラブ・スタッフ・選手はスポンサーの顔色を伺う必要がなくなり、サッカーに100％向き合う事が可能となります。
                        </p>
                        <div className="wp-block-image">
                          <figure className="alignleft size-large is-resized">
                            <img
                              decoding="async"
                              src="https://goat-fc.com/wp-content/uploads/2022/08/sosio-1-1024x568.jpg"
                              alt=""
                              className="wp-image-571"
                              width={511}
                              height={281}
                              style={{ opacity: 1 }}
                            />
                          </figure>
                        </div>
                        <p>
                          選手が素晴らしいサッカーを実現し、ゴールを決めるのは企業の為ではありません。
                          <br />
                          クラブを直接的に支えてくれているソシオの為です。
                        </p>
                        <p>
                          ユニフォームにも企業名や企業ロゴは一切ありません。
                        </p>
                        <figure className="wp-block-image size-large is-resized">
                          <img
                            decoding="async"
                            src="https://goat-fc.com/wp-content/uploads/2022/08/kit-1-1024x344.jpg"
                            alt=""
                            className="wp-image-573"
                            width={569}
                            height={191}
                            srcSet="https://goat-fc.com/wp-content/uploads/2022/08/kit-1-1024x344.jpg 1024w, https://goat-fc.com/wp-content/uploads/2022/08/kit-1-300x101.jpg 300w, https://goat-fc.com/wp-content/uploads/2022/08/kit-1-768x258.jpg 768w, https://goat-fc.com/wp-content/uploads/2022/08/kit-1-1536x515.jpg 1536w, https://goat-fc.com/wp-content/uploads/2022/08/kit-1-2048x687.jpg 2048w"
                            sizes="(max-width: 569px) 100vw, 569px"
                            style={{ opacity: 0 }}
                          />
                        </figure>
                        <p>
                          良いサッカーをしなければクラブは繁栄する事がありません。
                          <br />
                          長い年月をかけ成熟させるGOAT
                          FCでは、ソシオ制を導入する事により
                          <br />
                          <strong>サッカーの質そのもので勝負</strong>
                          する事が可能になります。
                        </p>
                        <p />
                        <p />
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
                          dateTime="2022-08-11T09:11:33+0900"
                        >
                          2022年8月11日
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
