import { BreadCrumbs } from './common/breadcrumbs';
import { PhilosophyCommon } from './common/PhilosophyCommon';
type Props = {
  content: string;
};

export const PhilosophyBody = () => {
  return (
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
                      <h2 className=" w-full text-4xl relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-gray-400">
                        <mark
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                          className="px-0 py-2.5 "
                        >
                          哲学
                        </mark>
                      </h2>
                      <div className="is-layout-flow wp-block-group">
                        <div className="wp-block-group__inner-container">
                          <div className="is-layout-flex wp-container-2 wp-block-columns">
                            <div
                              className="is-layout-flow wp-block-column"
                              style={{ flexBasis: '100%' }}
                            >
                              <p className="is-style-default has-st-regular-font-size">
                                テーマは
                                <strong>『史上最も戦術的なクラブ』</strong>
                              </p>
                              <p>
                                日本人の特徴である、勤勉さや協調性は戦術的に戦う事で、最大限の効果を発揮し世界に誇れる武器になると確信しています。
                                <br />
                                しかし、日本サッカーの現状は、戦術よりも個を重視している側面が強く在ります。
                              </p>
                              <p>
                                GOAT FCは戦術を研究する組織でもあります。
                                <br />
                                戦術の実験を繰り返し、進化させ、日本人に最適な『戦術サッカー』を追い求め、世界の頂点を目指していきます。
                              </p>
                              <p>
                                ポジショニングや判断だけにとどまらず、技術やフィジカル、メンタルまでも戦術と捉え、個をしっかりと戦術に落とし込み、独自の理論を貫きます。
                              </p>
                              <p>
                                スーパースターの輩出ではなく
                                <br />
                                エンタメと融合するわけでもなく
                                <br />
                                サッカーの質そのもので勝負するクラブです。
                              </p>
                              <p>合理的で論理的。</p>
                              <p>
                                このクラブは、戦術理論そのものを武器に誰も見た事がない領域のサッカーを目指し、長い年月をかけ、一目試合を見ただけで、既存のサッカーにはない新たなるサッカーを創り上げる事を目的としています。
                              </p>
                              <p>
                                そんな独自の思想を持つクラブは、独自の哲学や経営システムが必要です。
                                <br />
                                『史上最も戦術的なクラブ』を目指す為に、欠かせない要素をまとめました。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <PhilosophyCommon />
                      <div
                        style={{ height: 0 }}
                        aria-hidden="true"
                        className="wp-block-spacer"
                      />
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
                        dateTime="2022-08-10T16:51:26+0900"
                      >
                        2022年8月10日
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
  );
};
