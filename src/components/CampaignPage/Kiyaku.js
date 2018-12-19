import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
//semantic UI
import { Accordion , Icon} from "semantic-ui-react"
import getDateFromUnixTime from "../../Utils/getDateFromUnixTime";
import convertUrlToLinkText from "../../Utils/convertUrlToLinkText";

class Kiyaku extends Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }

    renderAccordionSet(index) {
        const { activeIndex } = this.state

        return (
            <React.Fragment>
            <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
            <Icon name='dropdown' />
            {this.getTitle(index)}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === index}>
            {this.getContent(index)}
        </Accordion.Content>
        </React.Fragment>
        )
    }

    getTitle(index) {
        if(index == 0) {
            return "キャンペーン概要"
        } else if (index == 1) {
            return "注意事項"
        } else if(index == 2) {
            return "よくある質問"
        }
    }
    getContent(index) {
        if(index == 0) {
            const tweetUrl = "https://twitter.com/" + this.props.screenName + "/status/" + this.props.idTweet
            return (
                <div>
                <ul>
                    <li>本キャンペーンは、以下の記載内容に同意の上、キャンペーンに参加すると、当選者には賞品をプレゼントするものです。</li>
                    <li>本キャンペーンに応募された場合は、本応募規約に同意したものとみなします。</li>
                    <li>キャンペーン期限 : {getDateFromUnixTime(this.props.startTime , true)}から{getDateFromUnixTime(this.props.endTime , true)}まで</li>
                    <li>上記のキャンペーン参加期間内にTwitterアカウント【@{this.props.screenName}】をフォローして、<a href={tweetUrl}>キャンペーン対象ツイート</a>をリツイートすることで参加可能です。</li>
                    <li>参加者には、ダイレクトメッセージで結果をお知らせします。</li>
                </ul>
                                
                </div>
            )
        } else if(index == 1) {
            return (
                <div>
                    <ul>
                        
                    <li>※アクセス集中や環境などにより、返信に時間がかかる場合がございますのでご容赦ください。</li>
                    <li>※当選後に賞品の詳細をお送りすることがあります。</li>
                    <li>※不正な行為があると判断した場合は、応募・当選を無効とさせていだきます。</li>
                    <li>※キャンペーン対象の投稿を引用ツイートをされた場合、特に下記の設定をされている方は、Twitterの仕様上、参加とみなされない場合がございますのでご注意ください。</li>
                    <li>・プロフィール、ユーザー名、自己紹介、画像などを設定していないアカウント</li>
                    <li>・頻繁にアクション(ツイート、リツイート、返信　など)を行っていないアカウント</li>
                    <li>・Twitterアカウント開設後、メールアドレスが本人のものか確認をするプロセスを行っていないアカウント</li>
                    <li>・開設直後で、上記に当てはまるアカウント</li>
                    <li>※非公開アカウント・開設したて・Botの場合、メンション、ダイレクトメッセージが送信できないため、キャンペーンに参加することができません。</li>
                    <li>※当選者には賞品の発送にあたり、ダイレクトメッセージで連絡をさせていただき、発送先の情報をお伺いすることがあります。発送先情報を所定の期日までにご連絡いただけない場合は、当選を無効とさせていただきます。</li>
                    <li>※ダイレクトメッセージが来るまでに、Twitterアカウントのフォローを外したり、リツイートを削除した場合は応募が無効となる場合があります</li>
                    <li>※やむを得ない事情などにより、賞品の発送時期は変更となる場合がございます。</li>
                    <li>※賞品の再発送はできません。賞品が何らかの事情により返送された場合は、当選を無効とさせていただきます。</li>
                    <li>※当選の権利は当選者ご本人のみに限り、家族・友人等第三者への譲渡、転売、換金はできません。</li>
                    <li>※賞品は予告なく変更となる場合がございますので、あらかじめご了承ください。</li>
                    <li>※本キャンペーンは、任意の事情で、変更、中断、中止する場合がございます。</li>
                    <li>※キャンペーンについてのツイートを含むTwitter上での発言内容や、それに関わるトラブルに関しては、弊社では責任を負いません。またTwitterおよび関連するアプリケーションの動作環境により発生するキャンペーンの中断または中止によって生じるいかなる損害についても、弊社が責任を負うものではありません。</li>
                    <li>※本キャンペーンへの応募に関し、応募者と第三者との間に紛争が生じた場合、応募者は自らの責任と費用負担によりその紛争を解決し、弊社に一切損害を与えないものとします。</li>
                    <li>※弊社が必要と判断した場合、本応募規約などを自由に変更できるものとし、本キャンペーンおよび本サイトの適正な運用を確保するために必要なあらゆる対応をとることができるものとします。 応募者は本キャンペーンおよび本サイトの運営方法に従うものとし、その運営方法に対し一切意義などを申し立てないものとします。</li>
                    <li>※ネットワークの不具合、コンピューターウィルスの影響およびサーバーへの不正アクセスなど弊社の支配が及ばない事態およびそれに関連して生じた応募者の損害などについて、弊社は一切の責任を負わないものとします。</li>
                    <li>※本キャンペーンに起因して生じる損害につき、弊社に故意または重過失がある場合を除き、弊社は一切の責任を負わないものとします。</li>
                    <li>■以下のいずれかにあたる場合には、ご応募は無効となりますのでご了承ください。</li>
                    <li>・著作権等第三者の権利を侵害するもの、名誉・信用・プライバシーを毀損するもの、迷惑行為となるもの、その他法令違反となるもの、及びそのおそれがあると当社が判断したもの。</li>
                    <li>・第三者や他社（その他製品を含む）を誹謗中傷する表現、差別的な表現、嫌悪感を抱く可能性のある表現、その他公序良俗に反する表現、及びこれらに該当するおそれがあると当社が判断したもの。</li>
                    <li>・宣伝、広告、勧誘、または営業行為を目的とするもの。</li>
                    <li>・ご住所・氏名・電話番号その他の個人情報が含まれるもの。</li>
                    <li>・売買及びそれに準ずる行為、特定サイト及びアドレスの掲示や宣伝行為の意味を含んだもの</li>
                    <li>・当サイトの運営を妨げ、信頼を毀損するような行為を含んだもの</li>
                    <li>・個人、企業、団体などを中傷したり、プライバシーを侵害するもの</li>
                    <li>・上記の他、本キャンペーン募集の趣旨にそぐわない等の理由で当社が適さないと判断したもの。</li>
                    <li>個人情報について</li>
                    <li>adAppは本キャンペーンを通じて提供されたお客様の個人情報を当選発表の連絡と当選賞品の発送にのみ使用いたします。</li>
                    <li>adAppは、本キャンペーンを通じて提供されたお客様の個人情報の取扱いの全部又は一部を、Twitterアカウント【@{this.props.screenName}】へ提供されます。</li>
                    <li>なお、お客様の個人情報をお客様の同意無しに第三者に開示・提供されることはありません。</li>


                    </ul>

                </div>
            )
        }
    }

  
	render() {
        const { activeIndex } = this.state

		return (
			<div className={style.KiyakuFrame}>
                <h2>応募規約</h2>
				<Accordion>
                    {this.renderAccordionSet(0)}
                    {this.renderAccordionSet(1)}
				</Accordion>
			</div>
		)
	}
}

export default Kiyaku
