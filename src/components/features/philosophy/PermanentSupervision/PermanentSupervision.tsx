import { BreadCrumbs } from '../common/breadcrumbs';
import { PhilosophyCommon } from '../common/PhilosophyCommon';

export const PermanentSupervision: React.VFC = () => {
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
                          string: '永久監督',
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
                            永久監督
                          </mark>
                        </h2>
                        <div className="is-vertical is-layout-flex wp-container-1 wp-block-group">
                          <p>サッカー戦術の歴史を振り返ると</p>
                          <p />
                          <p>
                            偉大な戦術家によって素晴らしいレベルに到達したクラブであっても、短期的な結果が伴わず監督が退任させられ
                            <br />
                            それまで築き上げたサッカーが、嘘の様に消えてなくなる事は今まで何度も起こっています。
                          </p>
                          <p />
                          <p>
                            監督が代われば、体現するべき戦術は一新され求められる選手も変わります。
                            <br />
                            そのようにしてクラブカラーは次第に失われていきます。
                            <br />
                            （既存のクラブの流れ）
                          </p>
                          <figure className="wp-block-image size-large is-resized">
                            <img
                              decoding="async"
                              src="https://goat-fc.com/wp-content/uploads/2022/08/永久監督-1024x525.jpg"
                              alt=""
                              className="wp-image-575"
                              width={497}
                              height={252}
                              style={{ opacity: 1 }}
                            />
                          </figure>
                          <p>
                            GOAT
                            FCでは創設者であるGOAT自信が永久監督に就任する事で
                            <br />
                            戦術や選手像を不変的なものと捉え、クラブ哲学を貫き続けます。
                          </p>
                          <p />
                          <p>設立後、数十年という月日が経過し</p>
                          <p>
                            健康面や年齢により監督の任務を遂行する事が困難になっても
                            <br />
                            それまでに理論をしっかりと体系的に構築し
                            <br />
                            継承者を育て上げ
                            <br />
                            永久に理論が途絶えぬよう
                            <br />
                            万全な準備を行い、独自の理論を貫き続けます。
                          </p>
                          <p />
                        </div>
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
                          dateTime="2022-08-12T02:15:17+0900"
                        >
                          2022年8月12日
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
