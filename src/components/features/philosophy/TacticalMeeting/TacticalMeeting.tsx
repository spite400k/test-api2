import { BreadCrumbs } from '../common/breadcrumbs';
import { PhilosophyCommon } from '../common/PhilosophyCommon';

export const TacticalMeeting: React.VFC = () => {
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
                          string: '戦術へのこだわり',
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
                        <h2 className="is-style-default">
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            戦術
                          </mark>
                        </h2>
                        <p>
                          戦術と一口に言っても、守備的な戦術もあれば、個を重視した戦術など様々なものが存在します。
                        </p>
                        <p>
                          その中でもGOAT FCが推し進める戦術は
                          <strong>超攻撃的な戦術</strong>です。
                        </p>
                        <p>
                          我々はリードを活かし守備を固め、逃げ切るような戦術は実行しません。
                          <br />
                          最後までボールを支配する事を試み、追加点を奪う姿勢を貫きます。
                          <br />
                        </p>
                        <h4 className="has-very-light-gray-background-color has-background">
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            プロセスを重視
                          </mark>
                        </h4>
                        <p>
                          目先の結果に拘ると、監督を入れ替え、個を持った選手を欲します。
                          <br />
                          チームを成熟させるよりも、人事的解決がスピーディだからです。
                        </p>
                        <p>しかし、それは我々の方針とは真逆の解決策。</p>
                        <p>
                          GOAT
                          FCは決して結果に拘らず、チームが成長し成熟する事を一番に考えます。
                          <br />
                          練習だけにとどまらず、全ての試合が成長のチャンスと捉え
                          <br />
                          例え勝てなくても、内容が伴えばその試合は評価に値すると考えます。
                          <br />
                        </p>
                        <h4 className="has-very-light-gray-background-color has-background">
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            戦術への拘り
                          </mark>
                        </h4>
                        <p>
                          我々はサッカーの試合を
                          <br />
                          <strong>
                            ビルドアップ・フィニッシュ・プレス・ブロック
                          </strong>
                          の4つの局面に分け
                          <br />
                          全ての局面に戦術を設定します。
                        </p>
                        <p>
                          さらに、それぞれの切り替わりにも戦術を仕込み円滑なトランジションを狙います。
                          <br />
                          （戦術局面図）
                        </p>
                        <figure className="wp-block-image size-full is-resized">
                          <img
                            decoding="async"
                            src="https://goat-fc.com/wp-content/uploads/2022/08/kyokumenzu.jpg"
                            alt=""
                            className="wp-image-578"
                            width={545}
                            height={365}
                            srcSet="https://goat-fc.com/wp-content/uploads/2022/08/kyokumenzu-300x202.jpg 300w, https://goat-fc.com/wp-content/uploads/2022/08/kyokumenzu-768x516.jpg 768w"
                            sizes="(max-width: 545px) 100vw, 545px"
                            style={{ opacity: 0 }}
                          />
                        </figure>
                        <p>
                          選手のフィジカル・技術・メンタルは全て戦術を遂行する為のもので
                          <br />
                          全てのパーソナリティはチームの為に存在すると考えます。
                          <br />
                        </p>
                        <figure className="wp-block-image size-large is-resized">
                          <img
                            decoding="async"
                            src="https://goat-fc.com/wp-content/uploads/2022/08/フィジカル-技術-メンタル-1024x525.jpg"
                            alt=""
                            className="wp-image-579"
                            width={437}
                            height={222}
                            style={{ opacity: 0 }}
                          />
                        </figure>
                        <p />
                        <h4 className="has-very-light-gray-background-color has-background">
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            フォーメーション
                          </mark>
                        </h4>
                        <p>
                          GOAT FCには決まったフォーメーションはありません。
                          <br />
                          我々は相手の陣形に合わせ、最適な陣形を選択します。
                          <br />
                          <br />
                          つまり、我々が会得するべき陣形は敵の数だけ存在します。
                          <br />
                          陣形だけでなく、最適なボール運びも敵の数だけ存在します。
                          <br />
                          <br />
                          この事からクラブの戦術は難解なものであり、通常のクラブ戦術の範囲を超えています。
                          <br />
                          結果、求められる選手の資質に戦術理解度は必須と言えます。
                          <br />
                          <br />
                          その難解な戦術を如何に理解しやすい順序と方法で落とし込むか・・・
                          <br />
                          そしてその戦術を選手達が理解し体現できるか・・・
                          <br />
                          <br />
                          それこそがこのクラブの難しさでもあり、魅力でもあります。
                          <br />
                        </p>
                        <h4 className="is-style-default has-very-light-gray-background-color has-background">
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            ゲームプラン
                          </mark>
                        </h4>
                        <p>
                          超攻撃的なサッカーを推し進める当クラブはボールを保持する事を重視します。
                          <br />
                          しかし、スコアや時間によって戦術的にゲームプラン戦術を発動させます。
                        </p>
                        <p>
                          例えばリードした状態での後半80分、ボールを繋ぎ続けた結果追加点を奪い2-0とした時
                          <br />
                          相手チームの心理としては、散々我々にボールを保持され失点したわけですから決死の覚悟でプレスを掛けます。
                        </p>
                        <p>
                          それを理解している我々は、これまでの丁寧にボール繋ぎから一転
                          <br />
                          一本のロングパスで裏のスペースを狙います。
                        </p>
                        <p>
                          このように、スコアや時間による心理・精神状態・集団心理さえも戦術と捉え
                          <br />
                          組織に落とし込み継承していきます。
                          <br />
                        </p>
                        <h2>
                          <mark
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            className="has-inline-color has-very-dark-gray-color"
                          >
                            戦術会議
                          </mark>
                        </h2>
                        <p>
                          史上最も戦術的なクラブを目指す為に、戦術会議は必須です。
                        </p>
                        <p>
                          我々の戦術会議は毎週2時間ほど行われ、試合だけでなく全ての練習をもビデオに録画。
                          <br />
                          それをオンライン上で共有し、永久監督であるGOAT自らが事細かに指導し理論を定着させます。
                        </p>
                        <figure className="wp-block-image size-large">
                          <img
                            decoding="async"
                            width={1024}
                            height={576}
                            src="https://goat-fc.com/wp-content/uploads/2022/08/1-1024x576.jpg"
                            alt=""
                            className="wp-image-580"
                            srcSet="https://goat-fc.com/wp-content/uploads/2022/08/1-1024x576.jpg 1024w, https://goat-fc.com/wp-content/uploads/2022/08/1-300x169.jpg 300w, https://goat-fc.com/wp-content/uploads/2022/08/1-768x432.jpg 768w, https://goat-fc.com/wp-content/uploads/2022/08/1-1536x864.jpg 1536w, https://goat-fc.com/wp-content/uploads/2022/08/1.jpg 1920w"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            style={{ opacity: 0 }}
                          />
                        </figure>
                        <p>
                          さらに戦術会議の内容は、ソシオ（Tactical
                          socio）にも公開されます。
                          <br />
                          戦術までカバーしてもらい応援頂く事で、GOAT
                          FCは無限の可能性を手にします。
                        </p>
                        <p>
                          戦術を理解したソシオは試合を応援すると同時に、戦術が遂行出来たか否かを理解します。
                          <br />
                          通常のクラブなら、選手の巧さや複数人の連係に着目するものです。
                          <br />
                          ですが我々のソシオは選手の任務遂行能力に着目する事になります。
                        </p>
                        <p>
                          『何が起こるか分からない』既存のサッカーではなく
                          <br />
                          起こるべき現象を理解し、予測してサッカーを観戦する事になります。
                        </p>
                        <p>
                          これは今までにない、全く新しいサッカーの観戦方法です。
                          <br />
                          これこそが我々が考える最上のサッカーの楽しみ方です。
                        </p>
                        <p>
                          戦術を共有するという事は、対戦クラブに研究されるという懸念もあります。
                          <br />
                          ですが我々には、相手がどんな対策を施したとしても
                          <br />
                          それに対する<strong>『対策の対策』</strong>
                          が存在します。
                        </p>
                        <p>
                          対策の対策を会得する事で、チームは無限に成長を続け
                          <br />
                          唯一無二の<strong>『史上最も戦術的なクラブ』</strong>
                          と成る事が出来るはずです。
                        </p>
                        <p>
                          さらに、戦術を公開する事は、次の世代の理解の向上にもなり
                          <br />
                          理論の継承はスムーズになります。
                        </p>
                        <p>
                          そうやってGOAT FCは歳月を重ねるたびに、より洗練され
                          <br />
                          次世代は旧世代をお手本にする事が出来ます。
                          <br />
                          これは、我々にとっても最も重要な部分です。
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
                          dateTime="2022-08-11T10:08:49+0900"
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
